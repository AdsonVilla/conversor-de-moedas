import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Conversor from "./Components/conversor.jsx";

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="row">
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </div>
      <div className="row">
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
      </div>
      <div className="row">
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </div>
    </div>
  );
}

export default App;
