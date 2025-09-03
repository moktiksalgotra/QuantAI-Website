import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = styled.button<{ theme: 'light' | 'dark' }>`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  background: ${props => props.theme === 'light' ? '#ffffff' : '#1e293b'};
  color: ${props => props.theme === 'light' ? '#1e3a8a' : '#f8fafc'};
  border: 2px solid ${props => props.theme === 'light' ? '#1e3a8a' : '#f8fafc'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ThemeToggle: FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const theme = darkMode ? 'dark' : 'light';
  const toggleTheme = toggleDarkMode;

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle;