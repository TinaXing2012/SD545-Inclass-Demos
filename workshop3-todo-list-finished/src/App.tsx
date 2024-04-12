import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

import './App.css'

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
