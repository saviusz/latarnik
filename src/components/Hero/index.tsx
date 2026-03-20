import style from "./style.module.css";

function Hero() {
  return (
    <section className={style.container}>
      <div className={style.texts}>
        <h1>Latarnik studencki</h1>
        <p>Witamy w latarniku studenckim</p>
        <p>
          Niczym na wyborach. Wypełnij krótki quiz, żeby poznać przedmioty i
          znaleźć swoją przyszłą speckę
        </p>
      </div>
      <div className={style.image}>
        <img src="specki.png" alt="Tabela specjalizacji" />
      </div>
    </section>
  );
}

export default Hero;
