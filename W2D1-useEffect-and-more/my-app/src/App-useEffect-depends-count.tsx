import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log('inside useEffect...');
  }, [count]); //it runs the first time when page finished render and depends on count

  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <hr />
      {show && <h1>Hello</h1>}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}
