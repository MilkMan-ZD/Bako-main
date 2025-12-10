// src/components/Catalog/CatalogCard.tsx
import styles from "./Catalog.module.scss";

interface CatalogCardProps {
    title: string;
    price: string;
    area: string;
    bedrooms: number;
    bathrooms: number;
    image?: string;
    bedroomIcon?: string;
    bathIcon?: string;
    showFeatures?: boolean;
}

export default function CatalogCard({
    title,
    price,
    area,
    bedrooms,
    bathrooms,
    image,
    bedroomIcon,
    bathIcon,
    showFeatures = true
}: CatalogCardProps) {
    // Проверяем, нужно ли показывать характеристики
    const shouldShowFeatures = showFeatures && (bedrooms > 0 || bathrooms > 0);

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                {/* Блок с изображением дома */}
                {image && (
                    <div className={styles.imageContainer}>
                        <div className={styles.cardImage}>
                            <img
                                src={image}
                                alt={title}
                                className={styles.image}
                            />
                        </div>
                    </div>
                )}

                {/* Верхняя строка: Название, Площадь (в прямоугольнике), Цена справа */}
                <div className={styles.topSection}>
                    {/* Левая часть: Название и Площадь */}
                    <div className={styles.titleAreaBlock}>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <div className={styles.areaBadge}>{area}</div>
                    </div>

                    {/* Правая часть: Цена */}
                    <div className={styles.priceBlock}>
                        <div className={styles.cardPrice}>{price}</div>
                    </div>
                </div>

                {/* Нижняя секция: Два прямоугольника с характеристиками (показываем только если нужно) */}
                {shouldShowFeatures && (
                    <div className={styles.featuresSection}>
                        {/* Прямоугольник спален - показываем только если bedrooms > 0 */}
                        {bedrooms > 0 && (
                            <div className={styles.featureRectangle}>
                                <div className={styles.featureContent}>
                                    {bedroomIcon ? (
                                        <img
                                            src={bedroomIcon}
                                            alt="Спальни"
                                            className={styles.featureIcon}
                                        />
                                    ) : (
                                        <div className={`${styles.featureIconFallback} ${styles.bedroom}`}></div>
                                    )}
                                    <div className={styles.featureTextBlock}>
                                        <span className={styles.featureNumber}>{bedrooms}</span>
                                        <span className={styles.featureText}>спален</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Прямоугольник ванн - показываем только если bathrooms > 0 */}
                        {bathrooms > 0 && (
                            <div className={styles.featureRectangle}>
                                <div className={styles.featureContent}>
                                    {bathIcon ? (
                                        <img
                                            src={bathIcon}
                                            alt="Ванны"
                                            className={styles.featureIcon}
                                        />
                                    ) : (
                                        <div className={`${styles.featureIconFallback} ${styles.bath}`}></div>
                                    )}
                                    <div className={styles.featureTextBlock}>
                                        <span className={styles.featureNumber}>{bathrooms}</span>
                                        <span className={styles.featureText}>ванны</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}