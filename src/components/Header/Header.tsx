// src/components/Header/Header.tsx
import { useState } from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { id: 1, text: "О компании", href: "#" },
        { id: 2, text: "Наши услуги", href: "#" },
        { id: 3, text: "Каталог", href: "#catalog" },
        { id: 4, text: "Информация", href: "#" },
        { id: 5, text: "Контакты", href: "#" }
    ];

    const scrollToCatalog = () => {
        const catalogElement = document.getElementById('catalog');
        if (catalogElement) {
            catalogElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false);
    };

    const handleNavClick = (href: string, e: React.MouseEvent) => {
        if (href === "#catalog") {
            e.preventDefault();
            scrollToCatalog();
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Логотип слева - большой */}
                <div className={styles.logo}>
                    <img
                        src={logo}
                        alt="Логотип компании"
                        className={styles.logoImage}
                    />
                </div>

                {/* Навигация для десктопа */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {menuItems.map((item) => (
                            <li key={item.id} className={styles.navItem}>
                                <a
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={(e) => handleNavClick(item.href, e)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Синяя кнопка справа */}
                <button className={styles.consultationBtn}>
                    Получить консультацию
                </button>

                {/* Кнопка меню для мобильных */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Открыть меню"
                >
                    <div className={styles.menuIcon}></div>
                </button>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <nav className={styles.mobileNav}>
                            <ul className={styles.mobileNavList}>
                                {menuItems.map((item) => (
                                    <li key={item.id} className={styles.mobileNavItem}>
                                        <a
                                            href={item.href}
                                            className={styles.mobileNavLink}
                                            onClick={(e) => handleNavClick(item.href, e)}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.mobileConsultationBtn}>
                                Получить консультацию
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}