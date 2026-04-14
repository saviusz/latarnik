import { getAnalytics, logEvent } from "firebase/analytics";
import Button from "../Button";
import style from "./style.module.css";

function Hero() {
  return (
    <section className={style.container}>
      <div className={style.texts}>
        <h1>Latarnik studencki</h1>
        <p>Witamy w latarniku studenckim</p>
        <p>
          Poznaj przedmioty i wybierz swoją przyszłą speckę
        </p>
        <Button style="primary" onClick={
          () => {
            const analytics = getAnalytics();
            logEvent(analytics, 'image_opened');
            window.open("specki.png")
          }
        }>Otwórz grafikę</Button>
      </div>
      <div className={style.image}>
        <img src="specki.png" alt="Tabela specjalizacji" />
      </div>
    </section>
  );
}

export default Hero;
