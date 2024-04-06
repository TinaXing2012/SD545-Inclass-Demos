import React, { ReactNode, useState } from 'react';

type Props = {
  children: ReactNode
}

function Son(props: Props) {
  const {children} = props;
  return (
    <div>
      Hello from Son!
      {children}
    </div>
  )
}

//parent to child
// 1. bind the data as customized HTML attribute on the child component
// 2. in the child component, receive the data vis props
function App() {
  return (
    <div className="App">
      <Son>
        <span>Hi, see you on Monday!</span>
        <h1>This is a h1</h1>
      </Son>
    </div>
  );
}

export default App;
