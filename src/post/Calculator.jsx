import { useState } from "react";
import resolve from "../utils/algorithm";
import "./styleCalculator.css";


export default function Calculator() {
  const [display, setDisplay] = useState('');



  const getValor = (e) => {
    setDisplay(display + e.target.textContent);
  };

  return (
    <div>
      {/* encabezado */}
      <div className="container_header">
        <p>calculator </p>
        <p>Timer</p>
      </div>

      <h1 className="letter">Bienvenidos a mi primera calculadora</h1>

      <div className="calculator">
        <div>
          <div className="display">{display}</div>

          <div className="row">
            <button className="number operator" onClick={getValor}>!</button>
            <button className="number operator" onClick={getValor}>^</button>
            <button className="number operator" onClick={getValor}>-</button>
            <button className="number operator" onClick={getValor}>+</button>
          </div>
          <div className="row">
            <button className="number" onClick={getValor}>
              7
            </button>
            <button className="number" onClick={getValor}>
              8
            </button>
            <button className="number" onClick={getValor}>
              9
            </button>
            <button className="number" onClick={()=>{
            setDisplay('')
            }} >c</button>
          </div>
          <div className="row">
            <button className="number" onClick={getValor}>
              4
            </button>
            <button className="number" onClick={getValor}>
              5
            </button>
            <button className="number" onClick={getValor}>
              6
            </button>
            <button className="number" onClick={getValor}>
              /
            </button>
          </div>
          <div className="row">
            <button className="number operator" onClick={getValor}>
              1
            </button>
            <button className="number" onClick={getValor}>
              2
            </button>
            <button className="number" onClick={getValor}>
              3
            </button>
            <button className="number" onClick={getValor}>*</button>
          </div>
          <div className="row">
            <button className="number operator" onClick={getValor}>
              0
            </button>
            <button className="number operator" onClick={getValor}>
              00
            </button>
            <button className="number delete">.</button>
            <button className="number answer" onClick={()=>{
              setDisplay(resolve(display) ?? '')
            }}> = </button>
          </div>
        </div>
      </div>
    </div>
  );
}
