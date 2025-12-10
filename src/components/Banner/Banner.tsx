// src/components/Banner/Banner.tsx
import styles from "./Banner.module.scss";
import BannerSearch from "./BannerSearch";
import BannerButtons from "./BannerButtons";
import heroBg from "../../assets/images/hero-bg.png";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bgImage} style={{ backgroundImage: `url(${heroBg})` }} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>
          Построй дом своей мечты.<br />
          Быстро, легко, надёжно
        </h1>
        <p>
          Откройте для себя новый мир домов,  с нашими опытными архитекторами и эксклюзивными предложениями.
        </p>
        <BannerButtons />
      </div>

      <div className={styles.searchWrapper}>
        <BannerSearch />
      </div>
    </section>
  );
}