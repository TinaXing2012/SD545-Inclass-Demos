import './App.css'

function Foo(){ //react component: return jsx
  return <h1>Foo Component</h1>
}


function App() { //Component: return jsx
  // const vDom = <><div>First Div</div> <div>Second Div</div></>;

  return (
    <>
      <div>First Div <span>Hello</span></div>
      {/* this is a comment */}
      <div>Second Div</div>
      <div>
        <ul>
          <li>1 Banana</li>
          <li>2 Apple</li>
          <li>3 Strawberry</li>
        </ul>
      </div>
      <div>
        <input type='text' />
      </div>
      <Foo></Foo>
    </>
  );
}

export default App;
