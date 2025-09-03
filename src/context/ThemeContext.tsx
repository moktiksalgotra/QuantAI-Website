import { createContext, ReactNode, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  applyTheme: (isDark: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  applyTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const applyTheme = (isDark: boolean) => {
    setDarkMode(isDark);
  };

  useEffect(() => {
    // Apply theme changes to document
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};