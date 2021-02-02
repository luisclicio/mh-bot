import { useState } from 'react';
import Splash from './pages/Splash';

export default function App() {
  const screens = {
    splash: 'SPLASH',
    chat: 'CHAT',
    about: 'ABOUT',
  };

  const [currentScreen, setCurrentScreen] = useState(screens.splash);

  return (
    <>
      {currentScreen === screens.splash && (
        <Splash onClick={() => setCurrentScreen(screens.chat)} />
      )}
    </>
  );
}
