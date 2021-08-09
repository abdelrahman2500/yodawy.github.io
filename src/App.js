import logo from './logo.svg';
import './App.scss';
import { ContextProvider } from './context/Context';
import { useState } from 'react';
import Branches from './components/barnches/branches';

function App() {

const[lang, setLang]= useState(localStorage.getItem("lang"))

  return (
    <div className="App">
      <ContextProvider>
        <Branches />
      </ContextProvider>
    </div>
  );
}

export default App;
