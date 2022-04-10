import React from "react";
import "./App.css";
import DivDireita from "./components/div-direita";
import DivEsquerda from "./components/div-esquerda";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="Tela-inicial">
        <DivEsquerda />
        <DivDireita />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
