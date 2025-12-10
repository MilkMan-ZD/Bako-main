// src/components/Catalog/CatalogSlider.tsx
import { useState } from 'react';
import styles from "./Catalog.module.scss";
import CatalogCard from "./CatalogCard";

interface CatalogSliderProps {
    projects: Array<{
        id: number;
        title: string;
        price: string;
        area: string;
        bedrooms: number;
        bathrooms: number;
        image: string;
        bedroomIcon: string;
        bathIcon: string;
        showFeatures?: boolean;
    }>;
}

export default function CatalogSlider({ projects }: CatalogSliderProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2; // Всего 2 секции

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
        <div className={styles.sliderContainer}>
            {/* Слайд 1 */}
            <div className={currentPage === 1 ? styles.slideActive : styles.slideHidden}>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <CatalogCard
                            key={`${project.id}-page1`}
                            title={project.title}
                            price={project.price}
                            area={project.area}
                            bedrooms={project.bedrooms}
                            bathrooms={project.bathrooms}
                            image={project.image}
                            bedroomIcon={project.bedroomIcon}
                            bathIcon={project.bathIcon}
                            showFeatures={project.showFeatures}
                        />
                    ))}
                </div>
            </div>

            {/* Слайд 2 */}
            <div className={currentPage === 2 ? styles.slideActive : styles.slideHidden}>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <CatalogCard
                            key={`${project.id}-page2`}
                            title={project.title}
                            price={project.price}
                            area={project.area}
                            bedrooms={project.bedrooms}
                            bathrooms={project.bathrooms}
                            image={project.image}
                            bedroomIcon={project.bedroomIcon}
                            bathIcon={project.bathIcon}
                            showFeatures={project.showFeatures}
                        />
                    ))}
                </div>
            </div>

            {/* Пагинация */}
            <div className={styles.pagination}>
                {/* Левая стрелка */}
                <button
                    className={`${styles.arrowButton} ${currentPage === 1 ? styles.disabled : ''}`}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    aria-label="Предыдущая страница"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Номера страниц */}
                <div className={styles.pageNumbers}>
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
                                onClick={() => goToPage(pageNumber)}
                                aria-label={`Перейти на страницу ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? 'page' : undefined}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>

                {/* Правая стрелка */}
                <button
                    className={`${styles.arrowButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    aria-label="Следующая страница"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}