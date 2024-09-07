import { useState } from "react";

export default function Publications() {
  let [likes, setLikes] = useState(0);
  let [valor, setValor] = useState(0);

  const aumnetarLikes = () => {
    isNaN(parseInt(valor)) ? (valor = 0) : setLikes(likes + parseInt(valor));
    console.log(parseInt(valor));
  };
  const disminuirLikes = () => {
    isNaN(parseInt(valor)) ? (valor = 0) : setLikes(likes - parseInt(valor));
    likes - parseInt(valor) <= 0
      ? setLikes(0)
      : setLikes(likes - parseInt(valor));
  };

  const rango = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      
      <div>
        {" "}
        <h2>likes {likes}</h2>
      </div>
      <input
        type="text"
        placeholder="aumentador de likes"
        id=""
        onChange={rango}
      />

      <button
        onClick={() => {
          aumnetarLikes();
        }}
      >
        aumentador likes
      </button>
      <button
        onClick={() => {
          disminuirLikes();
        }}
      >
        desminuir likes
      </button>
    </div>
  );
}
