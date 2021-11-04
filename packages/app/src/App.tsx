import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@jch/components';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Your count is {count}
        <Button onClick={() => setCount(v => v+1)} />
      </header>
    </div>
  );
}

export default App;
