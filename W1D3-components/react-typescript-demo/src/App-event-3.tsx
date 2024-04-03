import React, { MouseEvent } from 'react';


function App() {

  const handleClick = (username: string) => {
      return () => console.log(`Welcome, ${username}!`);
  }

  return <button name="login" onClick={handleClick('John')}>Click Me</button>
}

export default App;
