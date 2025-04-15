import styles from"./todolist.module.css";
import React, { useState } from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    
    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");    
        }
    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return(
        <>
            <div className={styles["to-do-list"]}>
                <div className={styles["top"]}>
                    <div className={styles["fancy-input-wrapper"]}>
                        <input 
                            className={styles["fancy-input"]}
                            type="text" 
                            placeholder="Enter a task..." 
                            value={newTask} 
                            onChange={handleInputChange}/>
                    </div>
                    <button 
                        className={styles["add-btn"]}
                        onClick={addTask}>
                    </button>
                </div>
                <ol className={styles["ol1"]}>
                    {tasks.map((task, index) => 
                    <li key={index} className={styles["li1"]}>
                        <span className={styles["text"]}>{task}</span>
                        <button className={`${styles["task-btn"]} ${styles["delete-btn"]}`} onClick={() => deleteTask(index)}></button>
                        <button className={`${styles["task-btn"]} ${styles["move-btn"]} ${styles["up-btn"]}`} onClick={() => moveTaskUp(index)}></button>
                        <button className={`${styles["task-btn"]} ${styles["move-btn"]} ${styles["down-btn"]}`} onClick={() => moveTaskDown(index)}></button>
                    </li>
                    )}
                </ol>
            </div>
        </>
    );
}

export default ToDoList