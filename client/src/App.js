import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Tarefas from './components/Tarefas';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Menu/>
      <Tarefas/>
      <Footer/>
    </div>
  );
}

export default App;
