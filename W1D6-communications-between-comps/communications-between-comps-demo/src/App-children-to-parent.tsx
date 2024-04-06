import React, { ReactNode, useState } from 'react';

type Props = {
  getTitle: (title: string) => void;
}

function Son(props: Props) {
  // const [title, setTitle] = useState('Saturday');

  const { getTitle } = props;

  // const changeTitle = () => {
  //   setTitle(title + Date.now());
  //   getTitle(title);
  // }
  const title = "hello from son";

  return (
    <div>
      This is Son!
      {title}
      <button onClick={() => getTitle(title)}>Change Title</button>
    </div>
  )
}

// children to parent: the data is in children
/**
 * 1. define a function inside parent to receive the data, 
 *     then pass the function to child component vid customized HTML attributed
 * 
 * 2. In the child, get the function via props, then call the function
 * 
 */
function App() {

  const [appTitle, setAppTitle] = useState('');


  const getTitle = (title: string) => {
    setAppTitle(title);
  }

  return (
    <div className="App">
      {appTitle}
      <h1>This is App</h1>
      
      <hr />
      <Son getTitle={getTitle} />
    </div>
  );
}

export default App;
