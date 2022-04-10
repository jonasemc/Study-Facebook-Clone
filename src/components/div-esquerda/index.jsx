import React from "react";
import style from "./divE.module.scss";

export default function DivEsquerda() {
  return (
    <div className={style.titulo}>
      <div className={style.divLogo}>
        <img
          className={style.logo}
          src="https://logosmarcas.net/wp-content/uploads/2020/04/Facebook-Logo-650x366.png"
          alt=""
        />
      </div>
      <div className={style.divDescription}>
        <h2>
          O Facebook ajuda você a se conectar e <br />
          compartilhar com as pessoas que <br />
          fazem parte da sua vida.
        </h2>
      </div>
    </div>
  );
}
