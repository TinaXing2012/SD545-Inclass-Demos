import React, { useEffect, useState } from 'react'

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <>
      <input />
      <div>
        <input />
        Current time: {time}
      </div>
    </>

  )
}
