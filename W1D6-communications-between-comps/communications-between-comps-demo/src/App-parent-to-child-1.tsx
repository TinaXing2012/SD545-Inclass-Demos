import React, { useState } from 'react';

type Props = {
  msg?: string,
  count: number
}

function Son(props: Props) {
  const { msg, count } = props;
  return (
    <div>
      {msg}
      This is Son Component!
      <h1>{count}</h1>
    </div>
  )
}

//parent to child
// 1. bind the data as customized HTML attribute on the child component
// 2. in the child component, receive the data vis props
function App() {
  
  const [message, setMessage] = useState('This is from Parent!');
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Son count={count}/>
      <button onClick={() => setCount(count + 1)}>Increse by 1</button>
    </div>
  );
}

export default App;
