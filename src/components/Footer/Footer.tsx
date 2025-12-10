// src/components/Footer/Footer.tsx
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.png";

export default function Footer() {
    const columns = [
        {
            title: "Компания",
            links: ["Строительство", "Каталог", "Отзывы"]
        },
        {
            title: "Оплата",
            links: ["Галерея", "Контакты", "Калькулятор"]
        },
        {
            title: "Новости",
            links: ["Гарантии", "Как заказать", "Блог"]
        }
    ];

    const scrollToCatalog = () => {
        const catalogElement = document.getElementById('catalog');
        if (catalogElement) {
            catalogElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleLinkClick = (link: string, e: React.MouseEvent) => {
        e.preventDefault();
        if (link === "Каталог") {
            scrollToCatalog();
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Левая часть - лого, описание */}
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <img
                            src={logo}
                            alt="БАКО - строительство домов"
                            className={styles.logoImage}
                        />
                    </div>

                    <p className={styles.description}>
                        Ваш надёжный партнёр в строительстве частного дома —
                        делаем процесс простым, быстрым и безопасным.
                    </p>
                </div>

                {/* Правая часть - 3 колонки ссылок */}
                <div className={styles.rightSection}>
                    <div className={styles.columns}>
                        {columns.map((column, index) => (
                            <div key={index} className={styles.column}>
                                <h4 className={styles.columnTitle}>{column.title}</h4>
                                <ul className={styles.linksList}>
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className={styles.linkItem}>
                                            <a
                                                href="#"
                                                className={styles.link}
                                                onClick={(e) => handleLinkClick(link, e)}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Копирайт по центру экрана - ВЫНЕСЕН ОТДЕЛЬНО */}
            <div className={styles.copyright}>
                © 2025 БАКО. Все права защищены.
            </div>
        </footer>
    );
}