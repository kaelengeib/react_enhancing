import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './Display'; // Adjust the path as necessary
import Keypad from './Keypad'; // Adjust the path as necessary

function App() {
  const [input, setInput] = useState('');

  function handleInput(value) {
    // Prevent adding more than one '.', '+', '-', '*', or '/' in a row
    if (
      (['.', '+', '-', '*', '/'].includes(value) && input.slice(-1) === value) ||
      (['+', '-', '*', '/'].includes(value) && input === '')
    ) {
      return;
    }
    setInput(input + value);
  }

  function calculate() {
    try {
      // Replace the safe eval() alternative with your own calculation logic here
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  }

  function clear() {
    setInput('');
  }

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default action of the Enter key
        calculate();
      } else if (e.key === 'Escape') {
        clear();
      } else if (e.key === 'Backspace') {
        setInput(input.slice(0, -1));
      } else if (!isNaN(Number(e.key)) || ['+', '-', '*', '/', '.'].includes(e.key)) {
        handleInput(e.key);
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]); // Dependency array includes input to update the closure with the latest state

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Display value={input} />
      <Keypad onInput={(e) => handleInput(e.target.name)} onCalculate={calculate} onClear={clear} />
    </div>
  );
}

export default App;
