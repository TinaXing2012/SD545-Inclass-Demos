import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// controlled component
function TemperatureConverter() {
  const [celcius, setCelcius] = useState(0);
  const [fah, setFah] = useState(32);

  const convertCtoF = (e: ChangeEvent<HTMLInputElement>) => {
    setCelcius(parseInt(e.target.value));
    setFah((9 / 5) * celcius + 32);
  }

  const convertFtoC = (e: ChangeEvent<HTMLInputElement>) => {
    setFah(parseInt(e.target.value));
    setCelcius((fah - 32) * 5/9);
  }

  return (
    <>
      <input type='number' value={celcius} onChange={convertCtoF} />
      =
      <input type='number' value={fah} onChange={convertFtoC} />
    </>
  )
}

function App() {
  return (
    <div>
      <TemperatureConverter />
    </div>
  );
}

export default App;
