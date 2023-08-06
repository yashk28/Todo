import './App.css';
import Navbar from './components/Navbar';
import AddBtn from './components/AddBtn';
import Modal from './components/Modal';
import { useState } from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddClick = () => {
    console.log("handle on click ");
    setIsOpen(true);
  };

  const handleCloseModal =() => {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <AddBtn onClick={handleAddClick}/>
        <Modal isOpen={isOpen} onClose={handleCloseModal}/>
      </div>
    </div>
  );
}

export default App;
