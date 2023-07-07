import React from "react";
import style from './InputBox.module.css';
const InputBox = () => {
  return (
    <div>
      <input className={style.input_style}  type='text' placeholder='Input Text' />
      <button className={style.button_style} type='button' > ADD </button>
    </div>
  );
}

export default InputBox;
