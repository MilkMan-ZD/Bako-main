// src/components/Banner/Counter.tsx
import styles from "./Banner.module.scss";

interface CounterProps {
    label: string;
    value: number;
    min?: number;
    max?: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export default function Counter({ 
    label, 
    value, 
    min = 1, 
    max = 10, 
    onIncrement, 
    onDecrement 
}: CounterProps) {
    return (
        <div className={styles.counterNew}>
            <label>{label}</label>
            <div className={styles.counterControls}>
                <div 
                    className={styles.counterBtn}
                    onClick={() => value > min && onDecrement()}
                    style={{ 
                        cursor: value <= min ? 'not-allowed' : 'pointer',
                        opacity: value <= min ? 0.5 : 1
                    }}
                >
                    &lt;
                </div>
                <div className={styles.counterValue}>{value}</div>
                <div 
                    className={styles.counterBtn}
                    onClick={() => value < max && onIncrement()}
                    style={{ 
                        cursor: value >= max ? 'not-allowed' : 'pointer',
                        opacity: value >= max ? 0.5 : 1
                    }}
                >
                    &gt;
                </div>
            </div>
        </div>
    );
}