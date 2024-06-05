import { createContext, useState, useEffect } from 'react';

export const ScreenWidthContext = createContext();

export const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <ScreenWidthContext.Provider value={{
        screenWidth,
        }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};