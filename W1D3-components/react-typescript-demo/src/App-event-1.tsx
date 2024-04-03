import React from 'react';

// function handleClick() {
//   console.log('I am being clicked!!!');
// }

function App() {

  const handleClick = () => {
    console.log('I am being clicked!!!');
    return function() {
      //
    }
  }
  const result = handleClick();

  return <button onClick={result}>Click Me</button>
}

export default App;
