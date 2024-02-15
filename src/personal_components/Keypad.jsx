import React from 'react';

function Keypad({ onInput, onCalculate, onClear }) {
  return (
    <div className="keypad">
      <button onClick={onClear}>C</button>
      <button name="/" onClick={onInput}>&divide;</button>
      <button name="*" onClick={onInput}>&times;</button>
      <button name="-" onClick={onInput}>&minus;</button>
      <button name="+" onClick={onInput}>+</button>
      {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((digit) => (
        <button key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
      <button name="=" onClick={onCalculate}>=</button>
    </div>
  );
}

export default Keypad;
