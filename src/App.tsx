import { useState, useEffect, useRef } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { SettingsMenu } from './components/SettingsMenu';
import { TimerSetupForm } from './components/TimerSetupForm';
import { useTimer } from './hooks/useTimer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { lightTheme, darkTheme } from './theme';
import { embeddingsList } from './data/embeddings';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const CountdownTimer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(window.innerWidth < 768 ? 6 : 10);
  const [marginBottom, setMarginBottom] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const timerRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfSuccess, setNumberOfSuccess] = useState(0);
  const { time, paused, addSecondsToTimer, toggleTimer, isTimeUp } = useTimer(90*60*1000);
  
  // Check if the game is finished
  const isGameCompleted = currentIndex >= embeddingsList.length;
  const isGameOver = isTimeUp || isGameCompleted;
  
  const currentEmbedding = currentIndex < embeddingsList.length 
    ? embeddingsList[currentIndex] 
    : embeddingsList[embeddingsList.length - 1];

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
    
    // Increment the current index
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    
    // Check if this was the last problem
    if (nextIndex >= embeddingsList.length && !paused) {
      // Stop the timer if we've completed all problems
      toggleTimer();
    }
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

  // Format remaining time as HH:MM:SS
  const formatRemainingTime = () => {
    const hours = time.hours;
    const minutes = time.minutes;
    const seconds = time.seconds;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Render ending screen
  const renderEndingScreen = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 4,
          textAlign: 'center'
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            maxWidth: 800,
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          {isTimeUp ? (
            <Typography variant="h2" component="h1" gutterBottom>
              Lejárt az időd.
            </Typography>
          ) : (
            <Typography variant="h2" component="h1" gutterBottom>
              Végigértél a játékon. Gratulálok!
            </Typography>
          )}

          {isTimeUp ? (
            <Typography variant="h5" gutterBottom>
              Végül a {currentIndex + 1}. pályáig jutottál, melyből {numberOfSuccess} játékot teljesítettél sikeresen.
            </Typography>
          ) : (
            <Typography variant="h5" gutterBottom>
              Végül a játék {embeddingsList.length} pályájából {numberOfSuccess} játékot teljesítettél sikeresen 
              és {formatRemainingTime()} időd maradt még.
            </Typography>
          )}

          <Typography variant="h6" sx={{ marginTop: 4 }}>
            Köszönjük, hogy részt vettél a bajnokságon, reméljük jól érezted magadat!
          </Typography>
        </Paper>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="w-screen overflow-hidden" style={{ backgroundColor: isGameOver ? "#f5f5f5" : currentEmbedding.color }}>
        {!isGameOver && (
          <SettingsMenu
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            addSecondsToTimer={addSecondsToTimer}
            setFontSize={setFontSize}
            isSetupMode={showForm}
          />
        )}

        {showForm && !isGameOver && (
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

        {!showForm && !isGameOver && (
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
                  margin: '10px 0' 
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
                  height: `calc(100vh - ${secondRef.current?.offsetHeight}px - 10px)`,
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
        
        {isGameOver && renderEndingScreen()}
      </div>
    </ThemeProvider>
  );
};

export default CountdownTimer;
