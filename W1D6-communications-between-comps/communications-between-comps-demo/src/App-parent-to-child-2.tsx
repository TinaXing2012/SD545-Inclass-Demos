import React, { ReactNode, useState } from 'react';

type Props = {
  age: number,
  name: string,
  isLoggedIn: boolean,
  fruits: string[],
  person: {
    firstname: string,
    lastname: string
  },
  callback: () => void,
  child: ReactNode
}

function Son(props: Props) {
  const {age, name, isLoggedIn, fruits, person, callback, child} = props;

  return (
    <div>
     
      <h1>This is Son Component!</h1>
      <p>age: {age}</p>
      <p>name: {name}</p>
      <p>isLoggedIn: {isLoggedIn}</p>
      <p>fruits: {fruits.map(f => <span>{f} <br /></span>)}</p>
      <p>person: {person.firstname}, {person.lastname}</p>
      <button onClick={callback}>Click Me</button>
      {child}
    </div>
  )
}

//parent to child
// 1. bind the data as customized HTML attribute on the child component
// 2. in the child component, receive the data vis props
function App() {
  return (
    <div className="App">
      <Son age={20}
        name='John'
        isLoggedIn={true}
        fruits={['banana', 'apple']}
        person={{firstname: 'john', lastname: 'smith'}}
        callback={() => console.log('callback passed to Son from APP!')}
        child={ <span>Hello</span>}
        />
    </div>
  );
}

export default App;
