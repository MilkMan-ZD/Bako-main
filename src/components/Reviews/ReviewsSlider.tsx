// src/components/ReviewsSlider/ReviewsSlider.tsx
import { useState } from 'react';
import styles from "./ReviewsSlider.module.scss";

// Импортируем картинки для отзывов
import ReviewImage1 from "../../assets/images/ReviewOne.png";
// import ReviewImage2 from "../../assets/images/ReviewImage2.png";
// import ReviewImage3 from "../../assets/images/ReviewImage3.png";

export default function ReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Данные отзывов - все в одном массиве
    const reviewsData = [
        {
            id: 1,
            image: ReviewImage1,
            name: "Дмитрий",
            position: "Наш покупатель",
            text: "В 2022 году решили начать строить загородный дом. По рекомендации обратились в компанию БАКО. Спасибо менеджерам Андрею и Наталии, которые помогли определиться с проектом дома Вилла М. Спасибо бригадам и прорабу Павлу за профессионализм. Планируем продолжить сотрудничество с компанией БАКО в дальнейшем."
        },
        {
            id: 2,
            image: ReviewImage1,
            name: "Анна",
            position: "Клиент компании",
            text: "Строили дом по проекту Вилла L. Очень довольны результатом! Команда профессионалов, которые знают свое дело. Все сроки соблюдены, качество на высшем уровне. Особенно хочется отметить внимание к деталям и индивидуальный подход к клиенту."
        },
        {
            id: 3,
            image: ReviewImage1,
            name: "Сергей",
            position: "Заказчик",
            text: "Обратились в БАКО по рекомендации друзей. Не пожалели ни на минуту! От проекта до сдачи дома прошло всего 8 месяцев. Все четко, профессионально, без задержек. Отдельная благодарность прорабу Михаилу за контроль качества на каждом этапе."
        },
        {
            id: 4,
            image: ReviewImage1,
            name: "Елена",
            position: "Владелица дома",
            text: "Мечтали о собственном доме много лет. БАКО помогли воплотить мечту в реальность. Отличная команда, качественные материалы, прозрачная смета. Живем в доме уже год - никаких нареканий, только положительные эмоции!"
        },
        {
            id: 5,
            image: ReviewImage1,
            name: "Игорь",
            position: "Инвестор",
            text: "Заказывал строительство дома для сдачи в аренду. БАКО предложили оптимальный проект по соотношению цена/качество. Сроки сдачи были соблюдены, документация оформлена правильно. Дом сдан в аренду, арендаторы довольны."
        }
    ];

    const currentReview = reviewsData[currentIndex];
    const totalReviews = reviewsData.length;

    // Функции для переключения отзывов
    const goToNextReview = () => {
        if (currentIndex < totalReviews - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Возвращаемся к первому
        }
    };

    const goToPrevReview = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(totalReviews - 1); // Переходим к последнему
        }
    };

    const goToReview = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className={styles.reviewsSlider}>
            <div className={styles.container}>
                {/* Заголовок блока слева */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Отзывы</h2>
                </div>

                {/* Слайдер с отзывами - ОДИН отзыв на весь слайд */}
                <div className={styles.sliderContainer}>
                    {/* Левая стрелка */}
                    <button
                        className={`${styles.arrowButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                        onClick={goToPrevReview}
                        disabled={currentIndex === 0}
                        aria-label="Предыдущий отзыв"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Контейнер с текущим отзывом */}
                    <div className={styles.reviewContainer}>
                        <div className={styles.reviewContent}>
                            {/* Картинка слева */}
                            <div className={styles.reviewImage}>
                                <img
                                    src={currentReview.image}
                                    alt={`${currentReview.name} - ${currentReview.position}`}
                                    className={styles.image}
                                    draggable="false"
                                    onDragStart={(e) => e.preventDefault()}
                                />
                            </div>

                            {/* Текст справа */}
                            <div className={styles.reviewTextContainer}>
                                <div className={styles.reviewQuote}>
                                    <p className={styles.quoteText}>"{currentReview.text}"</p>
                                </div>
                                <div className={styles.reviewAuthor}>
                                    <h4 className={styles.authorName}>{currentReview.name}</h4>
                                    <p className={styles.authorPosition}>{currentReview.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая стрелка */}
                    <button
                        className={`${styles.arrowButton} ${currentIndex === totalReviews - 1 ? styles.disabled : ''}`}
                        onClick={goToNextReview}
                        disabled={currentIndex === totalReviews - 1}
                        aria-label="Следующий отзыв"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Пагинация (точки) */}
                <div className={styles.pagination}>
                    {reviewsData.map((_, index) => {
                        return (
                            <button
                                key={index}
                                className={`${styles.pageDot} ${currentIndex === index ? styles.active : ''}`}
                                onClick={() => goToReview(index)}
                                aria-label={`Перейти к отзыву ${index + 1}`}
                                aria-current={currentIndex === index ? 'page' : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}