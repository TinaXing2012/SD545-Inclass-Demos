import React, { MouseEvent } from 'react';


function App() {

  const handleClick = (username: string, e: MouseEvent<HTMLButtonElement>) => {
      console.log(`Welcome, ${username}!, ${e.currentTarget.name}`);
  }

  return <button name="login" onClick={(e) => handleClick('John', e)}>Click Me</button>
}

export default App;
