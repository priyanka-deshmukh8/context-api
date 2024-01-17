import React from 'react';
import { Theme } from './context/Theme';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <p>Context API Demo</p>
          <ThemeToggle />
        </header>
      </div>
    </Theme>
  );
}

export default App;