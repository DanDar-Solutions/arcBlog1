import styles from "./digitalclock.module.css";
import React , { useState, useEffect } from "react";

export default function DigitalClock(){
    
    const [time,setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setTime(new Date());
        }, 1000 );

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        // set your desired timezone here:
        const timeZone = "Asia/Ulaanbaatar"; // example: Tokyo time, you can use "Asia/Ulaanbaatar" or "UTC" etc.
    
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
         // bi ene hesgiig oilgoogui
        const parts = formatter.formatToParts(time);
        let hours, minutes, seconds, meridiem;
    
        for (const part of parts) {
            switch (part.type) {
                case "hour":
                    hours = part.value;
                    break;
                case "minute":
                    minutes = part.value;
                    break;
                case "second":
                    seconds = part.value;
                    break;
                case "dayPeriod":
                    meridiem = part.value;
                    break;
            }
        }
    
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }
    return(
        <div className={styles["clock-container"]}>
            <div className={styles["clock"]}>
                <span className={styles["span1"]}>{formatTime()}</span>
            </div>
        </div>
    );
}