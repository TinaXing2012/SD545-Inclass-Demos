function App() { //Component: return jsx
  const locations = ['Fairfield', 'Ottumwa', 'Iowa City'];


    
  return (
    <ul>
      {locations.map((loc, index) => <li key={index}>{loc}</li>)}
    </ul>
  );
}

export default App;
