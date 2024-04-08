import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('inside useEffect...');
  }, []); // run only once

  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
    </div>
  )
}
