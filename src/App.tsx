import { useState, useEffect, useRef } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { SettingsMenu } from './components/SettingsMenu';
import { TimerSetupForm } from './components/TimerSetupForm';
import { ContentEmbed } from './components/ContentEmbed';
import { useTimer } from './hooks/useTimer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button'; // Add this import
import { lightTheme, darkTheme } from './theme';
import { embeddingsList } from './data/embeddings';

const CountdownTimer = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(window.innerWidth < 768 ? 6 : 10);  // Smaller on mobile
  const [marginBottom, setMarginBottom] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [links, setLinks] = useState<string[]>([]);
  const [linkSwitchDurationSec, setLinkSwitchDurationSec] = useState(0);
  const [embedFadeOutSec, setEmbedFadeOutSec] = useState(0);
  const timerRef = useRef<HTMLDivElement>(null);
  const [timerHeight, setTimerHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEmbedding = embeddingsList[currentIndex];
  const [numberOfSuccess , setNumberOfSuccess] = useState(0);
  const { time, paused, addSecondsToTimer, toggleTimer } = useTimer(90*60*1000);
  const remainingSeconds = time.seconds+time.minutes*60+time.hours*3600;

  const processSetupFormSubmission = () => {
    setShowForm(false);
    // Start the timer when form is submitted
    if (paused) {
      toggleTimer();
    }
    
    // Request fullscreen on form submission
    try {
      document.documentElement.requestFullscreen();
    } catch (error) {
      console.warn('Failed to enter fullscreen mode:', error);
    }
  };

  const handleNextEmbedding = (success: boolean) => {
    setNumberOfSuccess(success ? numberOfSuccess+1 : numberOfSuccess);
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.key.toLowerCase()) {
          case 'q':
            setDarkMode(!event.shiftKey);
            break;
          case 'b':
            setFontSize(prev => Math.max(1, prev + (event.shiftKey ? 1 : -1)));
            break;
          case 'v':
            setMarginBottom(prev => Math.max(0, prev + (event.shiftKey ? 1 : -1)));
            break;
          case 'h':
            addSecondsToTimer(event.shiftKey ? 3600 : -3600);
            break;
          case 'm':
            addSecondsToTimer(event.shiftKey ? 60 : -60);
            break;
          case 's':
            addSecondsToTimer(event.shiftKey ? 1 : -1);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [time]);

  useEffect(() => {
    const updateTimerHeight = () => {
      if (timerRef.current) {
        setTimerHeight(timerRef.current.offsetHeight);
      }
    };

    updateTimerHeight();
    window.addEventListener('resize', updateTimerHeight);
    return () => window.removeEventListener('resize', updateTimerHeight);
  }, [fontSize]); // Update when font size changes

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="h-screen w-screen overflow-hidden" style={{ backgroundColor: currentEmbedding.color }}>
        <SettingsMenu
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          addSecondsToTimer={addSecondsToTimer}
          setFontSize={setFontSize}
          isSetupMode={showForm}  // Add this prop
        />

        <div ref={timerRef}>
          <TimerDisplay
            time={time}
            isPaused={paused}
            fontSize={fontSize}
            marginBottom={marginBottom}
            /*onClick={toggleTimer}*/
          />

        {showForm && <TimerSetupForm
          onStart={processSetupFormSubmission} 
        />}

        {/* {!showForm && remainingSeconds > embedFadeOutSec-5 && (
            <div className={`transition-opacity ease-out duration-4000 ${remainingSeconds < embedFadeOutSec ? 'opacity-0' : 'opacity-100'}`}>
            <ContentEmbed 
              links={links} 
              animationPauseTime={linkSwitchDurationSec} 
              timerHeight={timerHeight}
            />
            </div>
        )} */}
        {!showForm && <div>
          <h1>{currentIndex+1}. játék: {currentEmbedding.title}</h1>
          <Button 
            variant="contained" 
            onClick={() => handleNextEmbedding(true)}
            color="success"
          >
            Sikerült a feladat
          </Button>
          <Button 
            variant="contained" 
            onClick={() => handleNextEmbedding(false)}
            color="error"
          >
            Nem sikerült, vagy átugrom a pályát.
          </Button>


          <p>Eddig {numberOfSuccess} sikeres és {currentIndex - numberOfSuccess} sikertelen próbálkozásod volt.</p>

          <p>{currentEmbedding.text}</p>

          <p>Ha nem töltene be az oldal, akkor kattints ide: <a href
          ={currentEmbedding.link}>{currentEmbedding.link}</a></p>
        </div>}
        </div>
      
        {!showForm &&
        <div
          style={{ 
            height: `calc(100vh - ${timerHeight}px)`,
          }}
        >
          <iframe 
            src={currentEmbedding.link} 
            width="100%"
            height="100%"
            title={currentEmbedding.title}
          ></iframe>
        </div>
        }

      </div>
    </ThemeProvider>
  );
};

export default CountdownTimer;
