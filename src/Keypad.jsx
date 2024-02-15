import React from 'react';

function Keypad({ onInput, onCalculate, onClear }) {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => onInput(i.toString())}>{i}</button>
      );
    }
    return digits;
  };

  return (
    <div className="keypad">
      {createDigits()}
      <button onClick={() => onInput('0')}>0</button>
      <button onClick={() => onInput('.')}>.</button>
      <button onClick={() => onInput('+')}>+</button>
      <button onClick={() => onInput('-')}>-</button>
      <button onClick={() => onInput('*')}>*</button>
      <button onClick={() => onInput('/')}>/</button>
      <button onClick={onClear}>C</button>
      <button onClick={onCalculate}>=</button>
    </div>
  );
}

export default Keypad;
