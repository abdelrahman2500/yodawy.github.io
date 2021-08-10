import logo from "./logo.svg";
import "./App.scss";
import { ContextProvider } from "./context/Context";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
      </ContextProvider>
    </div>
  );
}

export default App;
