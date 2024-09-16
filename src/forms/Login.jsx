import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const redirection = useNavigate();
let flag = false;
const validation = () => {
   if (email.trim() == "" || password.trim() == "") {
      return setMessage("ningun campo puede esta vacio");
   } else if (password.trim().length < 5) {
      return setMessage("contraseña muuy corta, minimo 6 caracteres");
   } else if (!email.trim().includes("@")) {
      return setMessage("el correo electronico debe contener @");
   }

   alert("datos correctos, bienvenido a nuestra pagina");
   flag = true;
   redirection("/Calculator");
};
const onlyLogIn = () => {
   if (flag == false) {
      return alert("no puedes ingresar sin haber iniciado sesion");
   }
};

return (
    /* container principal */
   <div className="principal_container">
      {/* encabezado */}
      <div className="container_header">
      <p onClick={onlyLogIn}>Calculator </p>
      <p onClick={onlyLogIn}>Timer</p>
      </div>

      <div className="form_image">
        {/* formulario registro */}
      <div className="registration_form">
         <p id="registro">INICIAR SESION</p>
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
