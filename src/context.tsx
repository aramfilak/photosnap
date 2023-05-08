import React, { useEffect, createContext, useContext, useState } from "react";

interface Context {
  isTablet: boolean;
  isMobile: boolean;
}

const AppContext = createContext<Context | null>(null);
interface ProviderProps {
  children: any;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia("(max-width: 48em)").matches);
  const [isTablet, setIsTablet] = useState<boolean>(window.matchMedia("(max-width: 80em)").matches);

  //track the screen size,
  //to change articles image based on screen size (mobile, tablet, desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 48em)").matches);
      setIsTablet(window.matchMedia("(max-width: 80em)").matches);
    };
    window.addEventListener("resize", handleResize);
    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isTablet,
        isMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

export const useGlobalContext = () => useContext(AppContext);
