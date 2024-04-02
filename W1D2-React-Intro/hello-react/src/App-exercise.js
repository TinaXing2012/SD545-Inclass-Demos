function App() { //Component: return jsx
  const locations = ['Fairfield', 'Ottumwa', 'Iowa City'];

  const lis = locations.map(loc => <li>{loc}</li>);
  console.log(lis)
    
  return (
    <ul>
      {lis}
    </ul>
  );
}

export default App;
