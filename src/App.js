import './App.css';
import Navbar from './components/Navbar';
import AddBtn from './components/AddBtn';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <AddBtn/>
      </div>
    </div>
  );
}

export default App;
