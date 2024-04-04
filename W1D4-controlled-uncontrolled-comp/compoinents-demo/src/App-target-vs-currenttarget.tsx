import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

function App() {
  
  const handleClickOnDiv = (e: MouseEvent<HTMLDivElement>) => {
      console.log(e.target); //the html element you clicked on 
      console.log(e.currentTarget); // the element you attach the listener
  }

  return (
    <div onClick={handleClickOnDiv}>
      <div>Hello</div>
      <button>Click Me</button>
      <div>World</div>
    </div>
  );
}

export default App;
