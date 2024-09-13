import { useState, useEffect } from "react";
import "./styleTimer.css";
import { useNavigate } from "react-router-dom";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  // Formato de la hora
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="principal_container">
      <div className="container_header">
        <p
          onClick={() => {
            navigate("/post");
          }}
        >
          Calculator
        </p>
        <p
          onClick={() => {
            navigate("/timer");
          }}
        >
          Timer
        </p>
      </div>
      <div className="all_clock">
        <div className="clock">
          <div className="buttons">
            <div className="chronometer">Chronometer</div>
            <div className="chronometer">TimeTable</div>
          </div>
          <div className="displayTimer">{formatTime(time)}</div>
        </div>
      </div>
    </div>
  );
}
