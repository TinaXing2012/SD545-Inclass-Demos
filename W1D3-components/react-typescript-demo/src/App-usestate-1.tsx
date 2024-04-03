import React, { MouseEvent, useState } from 'react';


function App() {
  console.log('inside app..');
  let [count, setCount] = useState(1);

  const increaseCount = () => {
    console.log('count: ', count); //1, 4, 7
    count = count + 1; //2, 5, 8
    setCount(count + 2); //state: 4, 7, 10

    count = count + 3; // 5, 8, 11
    console.log(count); // 5 , 8  ,11
  }
  return (
    <div>
      {count}
      <button onClick={increaseCount}>+1</button>
    </div>
  );
}


export default App;
