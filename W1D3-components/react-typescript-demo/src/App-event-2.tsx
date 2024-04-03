import React, { MouseEvent } from 'react';


function App() {

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('clicked!', event.currentTarget.name);
  }

  return <button name="login" onClick={ handleClick}>Click Me</button>
}

export default App;


