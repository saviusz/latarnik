import style from "./style.module.css";

function Hero() {
  return <section className={style.container}>
      <h1>Latarnik studencki</h1>
      <p>Witamy w latarniku studenckim</p>
      <p>
        Niczym na wyborach. Wypełnij krótki quiz, żeby poznać przedmioty i znaleźć swoją przyszłą
        speckę
      </p>
    </section>
}

export default Hero