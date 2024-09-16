import { useState, useEffect } from "react";


export default function Chronometer() {
  const [time, setTime] = useState(0); // Estado para el tiempo en milisegundos
  const [isActive, setIsActive] = useState(false); // Estado para controlar si está corriendo
  const [isPaused, setIsPaused] = useState(true); // Estado para pausar o reanudar
  const [intervalId, setIntervalId] = useState(null); // Guardar el ID del intervalo

  // Función para formatear el tiempo
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    // la funcion .padStart(2, "0")-- > el primero valor no dice cuantos numeros debe tener y en caso de que no
    //lo que vamos a hacer es agregar "0 " para rellenarlo y se cumpla  05 minutos 
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Iniciar el cronómetro
  const startChronometer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1000); // Incrementa en 1000 ms (1 segundo)
      }, 1000);
      setIntervalId(id); // Guarda el ID del intervalo
    }
  };

  // Pausar el cronómetro
  const pauseChronometer = () => {
    if (!isPaused) {
      clearInterval(intervalId); // Detener el intervalo
      setIsPaused(true);
    }
  };

  // Reiniciar el cronómetro
  const resetChronometer = () => {
    clearInterval(intervalId); // Detener cualquier intervalo activo
    setTime(0);
    setIsActive(false);
    setIsPaused(true);
  };

  // Limpiar el intervalo al desmontar el componente
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="chronometer-container">
      <div className="displayTimer">{formatTime(time)}</div>
      <div className="buttons">
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
