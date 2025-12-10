// src/components/AboutUs/AboutUs.tsx
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  const stats = [
    { value: "1,500+", label: "Построенных домов" },
    { value: "3,000+", label: "Счастливых клиентов" },
    { value: "2,000+", label: "Сопровождаемых объектов" },
    { value: "3,000+", label: "Индивидуальных проектов" },
  ];

  return (
    <section className={styles.aboutUs}>
      {/* Верхняя часть: два текстовых блока рядом */}
      <div className={styles.textRow}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Раскроем потенциал вашего участка качественным домостроением
          </h2>
          <p className={styles.subtitle}>
            Проектируем и строим так, чтобы дом служил долго и рос в цене.
          </p>
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <h3 className={styles.missionTitle}>
            От идеи до сдачи — создаём частные дома на современных, проверенных решениях
          </h3>
        </div>
      </div>

      {/* Нижняя часть: статистика на всю ширину как отдельный блок */}
      <div className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}