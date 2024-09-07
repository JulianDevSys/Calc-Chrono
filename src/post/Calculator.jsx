import { useState } from "react";
import "./styleCalculator.css";
export default function Calculator() {


  return (
    <div>

    {/* encabezado */}
    <div className="container_header">
    <p >calculator </p>
    <p >accoordion</p>
    </div>

    <h1 className="letter">Bienvenidos a mi primera calculadora</h1>

    <div className="calculator">


      <div>
        <div className="display">0</div>

        <div className="row">
          <button className="number operator">!</button>
          <button className="number operator">^</button>
          <button className="number operator">-</button>
          <button className="number operator">+</button>
          </div>
          <div className="row">
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="number">c</button>
          </div>
          <div className="row">
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">/</button>
          </div>
          <div className="row">
          <button className="number operator">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">x</button>
          </div>
          <div className="row">        
          <button className="number operator">0</button>
          <button className="number operator">00</button>
          <button className="number delete">.</button>
          <button className="number answer">=</button>
          </div>  

        </div>
        </div>

</div>


  )
}
