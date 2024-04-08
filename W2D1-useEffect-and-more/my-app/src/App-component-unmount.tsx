import { count } from 'console';
import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>Toggle Counter Component</button>
    </div>
  )
}
