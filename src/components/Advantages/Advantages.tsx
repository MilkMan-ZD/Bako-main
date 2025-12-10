// src/components/Advantages/Advantages.tsx
import styles from "./Advantages.module.scss";

// Импортируем иконки
import OneCard from "../../assets/images/OneCard.png";
import TwoCard from "../../assets/images/TwoCard.png";
import ThreeCard from "../../assets/images/ThreeCard.png";
import FourCard from "../../assets/images/FourCard.png";

export default function Advantages() {
    // Данные карточек преимуществ с переносами строк
    const advantages = [
        {
            id: 1,
            icon: OneCard,
            title: <>Ваше здоровье — наш приоритет</>, // Добавил перенос строки
            description: "Используем экологичные материалы",
            column: "left"
        },
        {
            id: 2,
            icon: TwoCard,
            title: <>Ваш дом готов к проживанию</>, // Добавил перенос строки
            description: "Выполняем все работы до вашего заселения в дом",
            column: "left"
        },
        {
            id: 3,
            icon: ThreeCard,
            title: <>Вы защищены от ошибок</>, // Добавил перенос строки
            description: "Благодаря нашему 30-летнему опыту",
            column: "right"
        },
        {
            id: 4,
            icon: FourCard,
            title: <>Вы знакомы с качеством заранее</>, // Добавил перенос строки
            description: "Регулярно показываем дома перед сдачей",
            column: "right"
        }
    ];

    return (
        <section className={styles.advantages}>
            <div className={styles.container}>
                {/* Заголовок блока */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Ваши преимущества при заказе</h2>
                </div>

                {/* Контейнер с карточками */}
                <div className={styles.content}>
                    {/* Левая колонка */}
                    <div className={styles.column}>
                        {advantages
                            .filter(adv => adv.column === "left")
                            .map(advantage => (
                                <div key={advantage.id} className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.cardIcon}>
                                            <img
                                                src={advantage.icon}
                                                alt={typeof advantage.title === 'string' ? advantage.title : "Преимущество"}
                                                className={styles.icon}
                                                draggable="false"
                                                onDragStart={(e) => e.preventDefault()}
                                            />
                                        </div>
                                        <div className={styles.bigTextContainer}>
                                            <h3 className={styles.cardTitle}>{advantage.title}</h3>
                                        </div>
                                    </div>
                                    <p className={styles.cardDescription}>{advantage.description}</p>
                                </div>
                            ))}
                    </div>

                    {/* Правая колонка */}
                    <div className={styles.column}>
                        {advantages
                            .filter(adv => adv.column === "right")
                            .map(advantage => (
                                <div key={advantage.id} className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.cardIcon}>
                                            <img
                                                src={advantage.icon}
                                                alt={typeof advantage.title === 'string' ? advantage.title : "Преимущество"}
                                                className={styles.icon}
                                                draggable="false"
                                                onDragStart={(e) => e.preventDefault()}
                                            />
                                        </div>
                                        <div className={styles.bigTextContainer}>
                                            <h3 className={styles.cardTitle}>{advantage.title}</h3>
                                        </div>
                                    </div>
                                    <p className={styles.cardDescription}>{advantage.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}