import { useState, useEffect } from "react";

export default function Chronometer() {
  const [time, setTime] = useState(0); // Estado para el tiempo en milisegundos
  const [isActive, setIsActive] = useState(false); // Estado para controlar si está corriendo
  const [isPaused, setIsPaused] = useState(true); // Estado para pausar o reanudar
  const [intervalId, setIntervalId] = useState(null); // Guardar el ID del intervalo

// estamos haciendo el formato del reloj
    const formatTime=(timeMiliseconds)=>{
    const transfSeconds= Math.floor(timeMiliseconds/1000)
    const minutes= String(Math.floor(transfSeconds/60)).padStart(2,"0")
    const seconds= String(Math.floor(transfSeconds%60)).padStart(2,"0")
    return `${minutes}:${seconds}` 
}


  // Iniciar el cronómetro
    const startChronometer=()=>{
        if(!isActive){
            setIsActive(true)
            setIsPaused(false)
            const value= setInterval(() => {
                setTime((valor)=> valor + 1000)
                
            }, 1000);
            setIntervalId(value)
        }
    }

  // Aqui Pausamos el cronómetro 
  //agregamos el setis active par que tome el valor de falso nuevamente
    const pauseChronometer = () => {
    if (!isPaused) {
      clearInterval(intervalId); // Detener el intervalo
        setIsPaused(true);
        setIsActive(false)
    }
};

  // Reiniciar el cronómetro
  const resetChronometer = () => {
    //clear nos detiene el intervalo de setimeinterval
    clearInterval(intervalId); 
    setTime(0);
    setIsActive(false);
    setIsPaused(true);
  };

  // Limpiar el intervalo al desmontar el componente
useEffect(()=>{
    return()=>clearInterval(intervalId)
},[intervalId])


  return (
    
    <div className="chronometer-container">
      <div className="displayTimer">{formatTime(time)}</div>
      <div className="buttons">
        {/* el disable nos va a desabilitar el boton si se cumple esas dos cosas */}
        <button onClick={startChronometer} disabled={isActive && !isPaused}>
          Iniciar
        </button>
        <button onClick={pauseChronometer} disabled={isPaused}>
          Pausar
        </button>
        <button onClick={resetChronometer}>Reiniciar</button>
      </div>
    </div>
  );
}


