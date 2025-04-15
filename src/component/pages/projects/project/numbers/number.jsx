import React, { useState } from "react"; 
import styles from "./number.module.css";


export default function Numbers(){
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    };
    function decrease(){
        setCount(count - 1);
    };
    function reset(){
        setCount(0);
    };
    return(
        <div className={styles["numberCount"]}>
            <h2 className={styles["h21"]}>Count: <span className={styles["span1"]}>{count}</span></h2>
            <div className="buttons">
                <button className={styles["cool-btn"]} onClick={decrease}>decrease</button>
                <button className={styles["cool-btn"]} onClick={reset}>reset</button>
                <button className={styles["cool-btn"]} onClick={increase}>increase</button>
            </div>
        </div>
    );
} 