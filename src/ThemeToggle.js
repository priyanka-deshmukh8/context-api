import React, { useState } from 'react';
import { ThemeConsumer } from './context/ThemeContext';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeConsumer>
      {value => (
        <>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle theme
          </button>
          <p>Current theme: {theme}</p>
          <p>Context theme: {value.theme}</p>
        </>
      )}
    </ThemeConsumer>
  );
};

export default ThemeToggle;