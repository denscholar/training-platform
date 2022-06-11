import './App.css';
import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Form from './components/FormModal/ModalForm';
import Hero from './components/Hero/Hero';
import { useState } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="App">
      <AppBar handleClick={setShowForm}/>
      <Hero showModal={setShowForm} />
      <Routes>
        <Route path='/' element={<Home handleClick={setShowForm}/>}/>
      </Routes>
      {showForm && <Form closeModal={setShowForm}/>}
    </div>
  );
}

export default App;
