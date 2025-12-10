// src/components/LastBanner/LastBanner.tsx
import styles from "./LastBanner.module.scss";
import bannerImage from "../../assets/images/banner.png";

export default function LastBanner() {
    return (
        <section
            className={styles.lastBanner}
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Готовы построить дом мечты?
                        </h2>
                        <p className={styles.subtitle}>
                            Позвольте нам помочь вам сделать следующий шаг:
                            - обсудим проект вашего дома уже сегодня.
                        </p>
                        <button className={styles.button}>
                            Рассчитать стоимость
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}