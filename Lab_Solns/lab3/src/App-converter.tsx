import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// controlled component
function TemperatureConverter() {
  const [celcius, setCelcius] = useState(0);
  const [fah, setFah] = useState<number | null>(null);

  const changeTemperature = (e: ChangeEvent<HTMLInputElement>) => {
    setCelcius(parseInt(e.target.value));
  }

  const convert = () => {
    setFah((9 / 5) * celcius + 32);
  }
  return (
    <>
      <input type='number' value={celcius} onChange={changeTemperature} />
      <button onClick={convert}>Convert to Fahrenheit</button>
      {fah && <div>Converted Fahrenheit: {fah}</div>}
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
