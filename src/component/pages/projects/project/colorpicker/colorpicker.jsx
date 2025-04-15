import styles from "./colorpicker.module.css";
import React, {useState} from "react";

function ColorPicker() {

    const [color , setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className={styles["colorpicker-container"]}>

        <h2 className={styles["colorpicker-h2"]}>Choose a Color 🎨</h2>
        <div className={styles["colorpicker-display"]} style={{backgroundColor: color}}>
            <p className={styles["colorpicker-p"]}>Selected color: {color}</p>
        </div>
        <label className={styles["colorpicker-label"]}>Select a color:</label>
        <input className={styles["colorpicker-input1"]} type="color"  value={color}  onChange={handleColorChange} />
      </div>
    );
  }
export default ColorPicker  