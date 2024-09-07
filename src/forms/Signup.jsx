import "./styleSignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const redirection = useNavigate();

  const validation = () => {
    if (email.trim() == "" || password.trim() == "" || username.trim() == "") {
      return setMessage("ningun campo puede esta vacio");
    } else if (password.trim().length < 5) {
      return setMessage("contraseña muuy corta, minimo 6 caracteres");
    } else if (!email.trim().includes("@")) {
      return setMessage("el correo electronico debe contener @");
    } else if (username.trim() == " ") {
      return "el nombre de usuario no puede contener espacios";
    }

    alert("datos guardados exitosamente");
    redirection("/login");
  };

  return (
    /* container principal */
    <div className="principal_container">
      <div className="form_image">
        {/* formulario registro */}
        <div className="registration_form">
          <p id="registro">REGISTRO</p>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="input_forms"
            placeholder="nombre de usuario"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label className="label" htmlFor="username">
            Email
          </label>
          <input
            type="email"
            className="input_forms"
            placeholder="correo electronoico"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="label" htmlFor="username">
            password
          </label>
          <input
            type="password"
            className="input_forms"
            placeholder="contraseña "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="label" htmlFor="username">
            birthdate
          </label>
          <input
            type="date"
            className="input_forms"
            placeholder="fecha de nacimiento"
          />

          {message}
          <div className="btn-register" onClick={validation}>
            guardar
          </div>
        </div>

        <img
          className="image"
          src="https://cdn.pixabay.com/photo/2016/12/01/09/11/calculation-1874770_960_720.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}
