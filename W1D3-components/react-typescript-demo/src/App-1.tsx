import React from 'react';

function Foo(){
  console.log('foo...');
  return <h1>This is Foo <Baz/> </h1>
}

function Bar(){
  return <h1>I'm sibling Bar</h1>
}

function Baz(){
  return <h1>I'm great son Baz...</h1>
}



function App() {
  const username = 'John';

  // 1. jsx => JavaScript Object
  //vDOM -> Real DOM
  const vDOM = (
    <div className="App">
      {username}
    </div>
  );

  console.log(typeof vDOM);

  return vDOM;
}

export default App;
