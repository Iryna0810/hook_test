import { useState, useEffect, useRef } from "react";
import css from '../feedback.module.css'

export function Clock() {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log('Це інтервал кожні 1000ms' + Date.now());
            setTime(new Date());
        }, 1000);

        return () => {
            console.log('це фенкція очистки перед настпним запуским useEffect')
            stop();
        }
    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    console.log(buttonRef);

    return (
        <div>
            <p> Поточний час: {time.toLocaleTimeString()}</p>
            <button className={css.button} type='button' onClick={stop} ref={buttonRef}>Зупинити</button>
        </div>
    );
}