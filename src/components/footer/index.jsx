import React from "react";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer1}>
      <footer>
        Português (Brasil)&nbsp;&nbsp;&nbsp;&nbsp; English (US)&nbsp;
        &nbsp;&nbsp;&nbsp; Español&nbsp; &nbsp;&nbsp;&nbsp; Français
        (France)&nbsp; &nbsp;&nbsp;&nbsp; Italiano&nbsp; &nbsp;&nbsp;&nbsp;
        Deutsch&nbsp; &nbsp;&nbsp;&nbsp; العربية &nbsp; &nbsp;&nbsp;&nbsp;
        हिन्दी&nbsp; &nbsp;&nbsp;&nbsp; 中文(简体)&nbsp; &nbsp;&nbsp;&nbsp;
        日本語&nbsp; &nbsp;&nbsp;&nbsp;
        <button className={style.botaoAdd}>+</button>
      </footer>
      <div className={style.linha}></div>
      <footer>
        Cadastre-se&nbsp;&nbsp;&nbsp;&nbsp;Entrar&nbsp;&nbsp;&nbsp;&nbsp;Messenger&nbsp;&nbsp;&nbsp;&nbsp;Facebook
        Lite&nbsp;&nbsp;&nbsp;&nbsp;Watch&nbsp;&nbsp;&nbsp;&nbsp;Locais&nbsp;&nbsp;&nbsp;&nbsp;Jogos&nbsp;&nbsp;&nbsp;&nbsp;Marketplace&nbsp;&nbsp;&nbsp;&nbsp;Facebook
        Pay&nbsp;&nbsp;&nbsp;&nbsp;Oculus&nbsp;&nbsp;&nbsp;&nbsp;Portal&nbsp;&nbsp;&nbsp;&nbsp;Instagram&nbsp;&nbsp;&nbsp;&nbsp;Boletim&nbsp;&nbsp;&nbsp;&nbsp;Local&nbsp;&nbsp;&nbsp;&nbsp;Campanhas
        de arrecadação de
        fundos&nbsp;&nbsp;&nbsp;&nbsp;Serviços&nbsp;&nbsp;&nbsp;&nbsp;Central de
        Informações de
        Votação&nbsp;&nbsp;&nbsp;&nbsp;Grupos&nbsp;&nbsp;&nbsp;&nbsp;Sobre&nbsp;&nbsp;&nbsp;&nbsp;Criar
        anúncio&nbsp;&nbsp;&nbsp;&nbsp;Criar
        Página&nbsp;&nbsp;&nbsp;&nbsp;Desenvolvedores&nbsp;&nbsp;&nbsp;&nbsp;Carreiras&nbsp;&nbsp;&nbsp;&nbsp;Privacidade&nbsp;&nbsp;&nbsp;&nbsp;Cookies&nbsp;&nbsp;&nbsp;&nbsp;Escolhas
        para
        anúncios&nbsp;&nbsp;&nbsp;&nbsp;Termos&nbsp;&nbsp;&nbsp;&nbsp;Ajuda&nbsp;&nbsp;&nbsp;&nbsp;Configurações&nbsp;&nbsp;&nbsp;&nbsp;Registro
        de Atividades
      </footer>
      <footer>
        {" "}
        <br /> Meta &copy; 2022{" "}
      </footer>
    </div>
  );
}
