import React, { createContext, useContext, useState } from 'react';


function Compnent1() {

  return (
    <div>
      Compnent 1
      <Compnent2 />
    </div>
  )
}

function Compnent2() {

  return (
    <UserContext.Consumer>
      {
        user => (
          <div>
            Compnent 2, {user}
            <Compnent3 />
          </div>
        )
      }
    </UserContext.Consumer>

  )
}

function Compnent3() {
  const user = useContext(UserContext);
  return (
    <div>
      Compnent 3, {user}
      <Compnent4 />
    </div>
  )
}

const UserContext = createContext('Default Default');

function Compnent4() {
  const user = useContext(UserContext);
  return (
    <div>
      Compnent 4
      <p>From context: {user}</p>
    </div>
  )
}

function Counter() {
  const user = useContext(UserContext);
  return (
    <div>
      Counter
      <p>From context: {user}</p>
    </div>
  )
}

function App() {
  const [user, setUser] = useState('John Smith');
  return (
    <div>
      <Counter></Counter>
      <UserContext.Provider value={user}>
        App
        <Compnent1 />
        <button onClick={() => setUser('Edward Jack')}>Change user</button>
      </UserContext.Provider>
    </div>
  );
}

export default App;
