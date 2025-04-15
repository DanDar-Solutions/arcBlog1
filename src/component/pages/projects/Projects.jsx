import styles from './Projects.module.css';
import ColorPicker from './project/colorpicker/colorpicker.jsx';
import Numbers from "./project/numbers/number.jsx";
import ToDoList from "./project/todolist/todolist.jsx";
import DigitalClock from './project/digitalclock/digitalclock.jsx';

function Projects(){
    return(
        <>
        <div className={styles["container"]}>
            <div className={styles["projects-container"]}>
                <h1 className={styles['h11']}>DigitalClock</h1>
                <DigitalClock/>
            </div>
            <div className={styles["projects-container"]}>
                <h1 className={styles['h11']}>ToDoList</h1>
                <ToDoList/>
            </div>
            <div className={styles["projects-container"]}>
                <h1 className={styles['h11']}>Color Picker</h1>
                <ColorPicker/>
            </div>
            <div className={styles["projects-container"]}>
                <h1 className={styles['h11']}>Numbers</h1>
                <Numbers/>
            </div>
        </div>
        </>
    );
}
export default Projects 