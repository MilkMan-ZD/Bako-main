// src/components/Banner/BannerButtons.tsx
import styles from "./Banner.module.scss";

export default function BannerButtons() {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      // Рассчитываем позицию с учетом высоты заголовка
      const headerHeight = - 150; // Примерная высота заголовка + отступы
      const elementPosition = catalogElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.calc}>Рассчитать стоимость</button>
      <button
        className={styles.view}
        onClick={scrollToCatalog}
      >
        Посмотреть <br /> готовые дома
      </button>
    </div>
  );
}