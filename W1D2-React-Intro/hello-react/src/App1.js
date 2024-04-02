import './App.css'

function getName(){
  return "MIU MSD"
}


function App() { //Component: return jsx
  const title = 'React Intro';
  const yellow = 'blue';
  return <h1 className='title' style={{color: yellow , fontSize: '50px'}}>{getName()}</h1>;
}

export default App;
