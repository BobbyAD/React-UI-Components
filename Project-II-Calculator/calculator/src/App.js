import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <div className="calc-display">
        <CalculatorDisplay text="42"/>
      </div>
      <div className="body">
        <div className="left">
          <ActionButton attributes={{char: "CLEAR", type: "text"}} />
          <div className="numbers">
            <NumberButton attributes={{char: "7", type: "number"}} />
            <NumberButton attributes={{char: "8", type: "number"}} />
            <NumberButton attributes={{char: "9", type: "number"}} />
            <NumberButton attributes={{char: "4", type: "number"}} />
            <NumberButton attributes={{char: "5", type: "number"}} />
            <NumberButton attributes={{char: "6", type: "number"}} />
            <NumberButton attributes={{char: "1", type: "number"}} />
            <NumberButton attributes={{char: "2", type: "number"}} />
            <NumberButton attributes={{char: "3", type: "number"}} />
          </div>
          <ActionButton attributes={{char: "0", type: "number"}} />
        </div>
        <div className="right">
          <NumberButton attributes={{char: "÷", type: "symbol"}} />
          <NumberButton attributes={{char: "x", type: "symbol"}} />
          <NumberButton attributes={{char: "-", type: "symbol"}} />
          <NumberButton attributes={{char: "+", type: "symbol"}} />
          <NumberButton attributes={{char: "=", type: "symbol"}} />
        </div>
      </div>
    </div>
  );
};

export default App;
