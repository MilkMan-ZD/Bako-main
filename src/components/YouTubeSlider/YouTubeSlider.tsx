// src/components/YouTubeSlider/YouTubeSlider.tsx
import { useState } from 'react';
import styles from "./YouTubeSlider.module.scss";

// Импортируем картинки
import YouTubeOne from "../../assets/images/YouTubeOne.png";
import YouTubeTwo from "../../assets/images/YouTubeTwo.png";
import YouTubeThree from "../../assets/images/YouTubeThree.png";

export default function YouTubeSlider() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    // Первая страница - оригинальный порядок
    const page1Cards = [
        { id: 1, image: YouTubeOne, alt: "YouTube видео 1" },
        { id: 2, image: YouTubeTwo, alt: "YouTube видео 2" },
        { id: 3, image: YouTubeThree, alt: "YouTube видео 3" },
    ];

    // Вторая страница - меняем порядок
    const page2Cards = [
        { id: 4, image: YouTubeThree, alt: "YouTube видео 3" },
        { id: 5, image: YouTubeOne, alt: "YouTube видео 1" },
        { id: 6, image: YouTubeTwo, alt: "YouTube видео 2" },
    ];

    // Текущие карточки для отображения
    const currentCards = currentPage === 1 ? page1Cards : page2Cards;

    // Функции для переключения страниц
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className={styles.youtubeSlider}>
            <div className={styles.container}>
                {/* Заголовок блока */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Обзоры</h2>
                </div>

                {/* Слайдер с карточками */}
                <div className={styles.sliderContainer}>
                    {/* Левая стрелка */}
                    <button
                        className={`${styles.arrowButton} ${currentPage === 1 ? styles.disabled : ''}`}
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        aria-label="Предыдущий слайд"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Карточки */}
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardsGrid}>
                            {currentCards.map((card) => (
                                <div key={card.id} className={styles.card}>
                                    <img
                                        src={card.image}
                                        alt={card.alt}
                                        className={styles.cardImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая стрелка */}
                    <button
                        className={`${styles.arrowButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        aria-label="Следующий слайд"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Пагинация (точки) */}
                <div className={styles.pagination}>
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                className={`${styles.pageDot} ${currentPage === pageNumber ? styles.active : ''}`}
                                onClick={() => goToPage(pageNumber)}
                                aria-label={`Перейти на страницу ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? 'page' : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}