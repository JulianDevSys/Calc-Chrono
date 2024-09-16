import { Outlet, useNavigate } from "react-router-dom";


export default function Timer() {
  const navigate= useNavigate()

  return (
    <div className="principal_container">
      <div className="container_header">
        <p onClick={() => navigate("/calculator")}>Calculator</p>
        <p onClick={() => navigate("/timer")}>Timer</p>
      </div>

      <div className="all_clock">
        <div className="clock">
          <div className="buttons">
            <div className="chronometer" onClick={() => navigate("/clock/cronometro")}>
              Chronometer
            </div>
            <div className="chronometer" onClick={() => navigate("/clock")}>
              Timer
            </div>
        
          </div>
          <Outlet  />
        </div>
      </div> 
    </div>
  );
}
