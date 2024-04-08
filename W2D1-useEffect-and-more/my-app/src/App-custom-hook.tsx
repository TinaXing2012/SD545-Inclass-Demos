import React, { useState } from 'react'

// custom hook must start with "use"
// function useToggle(defaultState: boolean){
//   const [show, setShow] = useState(defaultState);
//   const toggle = () => {
//     setShow(!show);
//   }
//   return {show, toggle};
// }

function useToggle(defaultState: boolean): [boolean, () => void]{
  const [show, setShow] = useState(defaultState);
  const toggle = () => {
    setShow(!show);
  }
  return [show, toggle];
}


function Comp(){ //React component: a function which starts with upper case letter

  
  const [show, toggle] = useToggle(false);
  return (
    <div>
      {show && <h1>Hello</h1>}
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}


export default function App() {

 const [show, toggle] = useToggle(true);

  return (
    <div>
      {show && 'Hello'}
      <button onClick={toggle}>Toggle</button>
      <hr/>
      <Comp />
    </div>
  )
}
