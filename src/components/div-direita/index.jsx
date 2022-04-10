import React from "react";
import style from "./divD.module.scss";

export default function DivDireita() {
  return (
    <div className={style.box}>
      <div className={style.boxPrincipal}>
        <div className={style.boxSecundaria}>
          <input
            className={style.input}
            type="email"
            placeholder="Email ou telefone"
          />
          <input className={style.input} type="password" placeholder="Senha" />
          <button className={style.botaoEntrar}>Entrar</button>
          <a href="">Esqueceu a senha?</a>
          <div className={style.linha}></div>
          <button className={style.botaoCriar}>Criar nova conta</button>
        </div>
      </div>
      <p>
        <strong>Criar uma Página</strong> para uma celebridade, uma marca ou uma{" "}
        <br /> empresa.
      </p>
    </div>
  );
}
