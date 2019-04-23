import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calculator">
      <NumberButton attributes={{char: "3", type: "number"}} />
    </div>
  );
};

export default App;
