// src/components/Banner/BannerSearch.tsx
import { useState } from "react";
import styles from "./Banner.module.scss";
import { Home } from "lucide-react";
import Counter from "./Counter";

export default function BannerSearch() {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);

  return (
    <div className={styles.searchCard}>
      <h3>Быстрый поиск идеального дома</h3>

      <div className={styles.field}>
        <label>Тип</label>
        <div className={styles.customSelect}>
          <Home size={18} />
          <select defaultValue="Газобетон">
            <option value="Газобетон">Газобетон</option>
            <option value="Каркасный">Кирпич</option>
            <option value="Из керамоблоков">Дерево</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <Counter
          label="Спален"
          value={bedrooms}
          onIncrement={() => setBedrooms(prev => prev + 1)}
          onDecrement={() => setBedrooms(prev => Math.max(1, prev - 1))}
        />

        <Counter
          label="Ван"
          value={bathrooms}
          onIncrement={() => setBathrooms(prev => prev + 1)}
          onDecrement={() => setBathrooms(prev => Math.max(1, prev - 1))}
        />
      </div>

      {/* Кнопка Найти */}
      <button className={styles.searchBtn}>Найти</button>
    </div>
  );
}