import styles from './Content.module.css'
import { useState, useEffect } from 'react'

function Contents(props){
    // Animation state
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        // Add a slight delay for animation
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);
    
    // Sample data
    const title = "Sample Blog Post";
    const discription = "This is a sample description for the blog post.";
    const date = "April 10, 2024";
    
    return(
        <div className={styles[`Card`]}>
            <div className={styles["Card-title"]}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles["Card-content"]}>
                <video className={styles["video1"]} src=""></video>
            </div>
            <div className={styles["Card-discription"]}>
                <p>{props.discription}</p>
            </div>
            <div className={styles["Card-date"]}>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

Contents.defaultProps = {
    title : "Title",
    discription: "discription",
    date : "year/month/day",
}

export default Contents 
