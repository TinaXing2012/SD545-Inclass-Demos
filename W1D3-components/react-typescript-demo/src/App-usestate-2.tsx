

import React, { MouseEvent, useState } from 'react';


function App() {
  console.log('inside app..');
  let [abc, def] = useState(1);

  const increaseCount = () => {
    def(abc + 3);
  }
  return (
    <div>
      {abc}
      <button onClick={increaseCount}>+1</button>
    </div>
  );
}


export default App;