import { useState, useEffect } from "react";
import "./styleTimer.css";

export default function Clock() {
    const [time, setTime] = useState(new Date()); // Mover el estado aquí dentro del componente

    useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Actualizar la hora cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []); // Solo ejecutar una vez al montar el componente

  // hacemos el Formato de la hora
    const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
    };

    return (
    <div className="chronometer-container">
    <div className="displayTimer">
        {formatTime(time)} 
    </div>
    </div>
    );
}

