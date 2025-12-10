// src/components/Catalog/Catalog.tsx
import styles from "./Catalog.module.scss";
import CatalogSlider from "./CatalogSlider";

// Импортируем картинки
import houseOne from "../../assets/images/houseOne.png";
import houseTwo from "../../assets/images/houseTwo.png";
import houseThree from "../../assets/images/houseThree.png";
import houseFour from "../../assets/images/houseFour.png";
import houseFive from "../../assets/images/houseFive.png";
import houseSix from "../../assets/images/houseSix.png";

// Импортируем иконки
import bedroomIcon from "../../assets/images/bedroom.png";
import bathIcon from "../../assets/images/bath.png";

export default function Catalog() {
  // Данные проектов с картинками
  const projects = [
    {
      id: 1,
      title: "Каркасный",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 3,
      bathrooms: 2,
      image: houseOne,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: true
    },
    {
      id: 2,
      title: "Газобетон",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 1,
      bathrooms: 2,
      image: houseTwo,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: true
    },
    {
      id: 3,
      title: "Из керамоблоков",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 1,
      bathrooms: 2,
      image: houseThree,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: true
    },
    {
      id: 4,
      title: "Особняки",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 1,
      bathrooms: 2,
      image: houseFour,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: true
    },
    {
      id: 5,
      title: "Гаражи",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 0,
      bathrooms: 0,
      image: houseFive,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: false
    },
    {
      id: 6,
      title: "Бани",
      price: "30 000 ₽",
      area: "175.5 м²",
      bedrooms: 1,
      bathrooms: 2,
      image: houseSix,
      bedroomIcon: bedroomIcon,
      bathIcon: bathIcon,
      showFeatures: false
    },
  ];

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ПРОЕКТЫ ДОМОВ</h2>
        </div>

        {/* Используем слайдер */}
        <CatalogSlider projects={projects} />
      </div>

      {/* Стили для четкости иконок */}
      <style>{`
        img.featureIcon {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
}