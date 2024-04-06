import React, { ReactNode, useState } from 'react';

type AProps = {
  onChangeName: (name: string) => void
}

function A(props: AProps) {
  const name = 'MSD 545 WAD 1';
  const {onChangeName} = props;

  return (
    <>
      <h1>This is A!!!</h1>
      <button onClick={() => onChangeName(name)}>Pass name to B</button>
    </>
  )
}

type BProps = {
  name: string
}

function B(props: BProps) {
  const {name} = props;

  return (
    <>
      <h1>This is B!!! {name}</h1>
    </>
  )
}



function App() {
  const [name, setName] = useState('');

  const changeName = (name: string) => {
    setName(name);
  }


  return (
    <div className="App">
      This is App
      <A onChangeName={changeName} />
      <B name={name}/>
    </div>
  );
}

export default App;
