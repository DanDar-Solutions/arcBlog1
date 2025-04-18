import styles from "./StopWatch.module.css";
import React , {useState , useRef, useEffect} from "react";

export default function StopWatch(){
    const [isRunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const   intervalIdRef = useRef(null);
    const   startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning == true){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);


    function Start(){
       setIsrunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };
    function Stop(){
        setIsrunning(false);
    };
    function Reset(){
        setIsrunning(false);
        setElapsedTime(0);
    };
    function FormatTime(){
        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minute = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/(1000)%60);
        let millseconds = Math.floor((elapsedTime%1000)/10);
        hours = String(hours).padStart(2,"0");
        minute = String(minute).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        millseconds = String(millseconds).padStart(2,"0");

        return `${hours}:${minute}:${seconds}:${millseconds}`;
    };



    return(
        <>
            <div className={styles["container"]}>
                <span className={styles["span1"]}>{FormatTime()}</span>
                <div className={styles["btns"]}>
                    <button className={styles["start-btn"]} onClick={Start}>Start</button>
                    <button className={styles["stop-btn"]} onClick={Stop}>Stop</button>
                    <button className={styles["reset-btn"]} onClick={Reset}>Reset</button>
                </div>
            </div>
        </>
    );
}