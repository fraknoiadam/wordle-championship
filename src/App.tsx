import { useState, useEffect, useRef } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { SettingsMenu } from './components/SettingsMenu';
import { TimerSetupForm } from './components/TimerSetupForm';
import { useTimer } from './hooks/useTimer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button'; // Add this import
import { lightTheme, darkTheme } from './theme';
import { embeddingsList } from './data/embeddings';

const CountdownTimer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(window.innerWidth < 768 ? 6 : 10);  // Smaller on mobile
  const [marginBottom, setMarginBottom] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const timerRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEmbedding = embeddingsList[currentIndex];
  const [numberOfSuccess , setNumberOfSuccess] = useState(0);
  const { time, paused, addSecondsToTimer, toggleTimer } = useTimer(90*60*1000);

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
    // Add 5 minutes
    if (success) {
      addSecondsToTimer(2.75*60);
    } else {
      addSecondsToTimer(-3.25*60);
    }
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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="w-screen overflow-hidden" style={{ backgroundColor: currentEmbedding.color }}>
        <SettingsMenu
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          addSecondsToTimer={addSecondsToTimer}
          setFontSize={setFontSize}
          isSetupMode={showForm}
        />

        {showForm && (
          <div ref={timerRef}>
            <TimerDisplay
              time={time}
              isPaused={paused}
              fontSize={fontSize}
              marginBottom={marginBottom}
              onClick={() => {}}
            />
            <TimerSetupForm onStart={processSetupFormSubmission} />
          </div>
        )}

        {!showForm && (
          <>
          <div ref={secondRef}>
            {/* 3-column header layout */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px 20px 5px', // Reduced bottom padding
              width: '100%'
            }}>
              {/* Left column - Stats */}
              <div style={{ 
                flex: '1', 
                textAlign: 'left',
                fontSize: '1.1rem',
                fontWeight: 'bold' 
              }}>
                <p style={{ margin: 0 }}>
                  Sikeres játékok: {numberOfSuccess} db<br/>
                  Sikertelen játékok: {currentIndex - numberOfSuccess} db
                </p>
              </div>
              
              {/* Middle column - Title */}
              <div style={{ flex: '2', textAlign: 'center' }}>
                <h1 style={{ margin: 0 }}>{currentIndex+1}. játék: {currentEmbedding.title}</h1>
              <p style={{ margin: '10px 0' }}>
              {currentEmbedding.embedding ? 'Ha nem töltene be az oldal, akkor kattints ide:' : 'Az alábbi játék elkezdéséhez kattints ide:'}
                <a 
                  href={currentEmbedding.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ marginLeft: '5px' }}
                >
                  {currentEmbedding.link}
                </a>
              </p>
              </div>

              
              {/* Right column - Timer with smaller font */}
              <div style={{ flex: '1', textAlign: 'right' }} ref={timerRef}>
                <TimerDisplay
                  time={time}
                  isPaused={paused}
                  fontSize={fontSize * 0.4} // Smaller font for timer
                  marginBottom={0}
                  onClick={() => {}}
                />
              </div>
            </div>
            
            {/* Content area - reduced top margin */}
            <div style={{ 
              //padding: '0 0px', 
              textAlign: 'center', 
              fontSize: '1.2rem',
              //marginTop: '-15px' // Add negative margin to bring content closer to title
            }}>
              {/* Description text */}
              <p style={{ margin: '0px 0' }}>{currentEmbedding.text}</p>
              
              {/* Buttons - adjusted top margin */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px', 
                margin: '10apx 0' 
              }}>
                <Button 
                  variant="contained" 
                  onClick={() => handleNextEmbedding(true)}
                  color="success"
                  size="large"
                >
                  Sikerült a feladat
                </Button>
                <Button 
                  variant="contained" 
                  onClick={() => handleNextEmbedding(false)}
                  color="error"
                  size="large"
                >
                  Nem sikerült, vagy átugrom a pályát.
                </Button>
              </div>
            </div>
            </div>
            
            {/* Iframe container */}
            {currentEmbedding.embedding && (
              <div
              style={{ 
                height: `calc(100vh - ${secondRef.current?.offsetHeight}px - 20px)`,
                width: '100%',
                border: 'none',
              }}
              >
              <iframe 
                src={currentEmbedding.link} 
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title={currentEmbedding.title}
              ></iframe>
            </div>)}
            </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CountdownTimer;
