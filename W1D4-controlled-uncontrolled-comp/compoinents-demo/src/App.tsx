import { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from "react";

import Hello from "./Hello";

import './App.css';



function App() {


  return (
    <>
      <div style={{ color: 'red', fontSize: '28px', backgroundColor: 'blue' }}>
        Hello
      </div>
      <div className='title'>World</div>
      <Hello />
    </>
  );
}

export default App;
