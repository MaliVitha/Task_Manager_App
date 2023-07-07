import React from 'react'
import style from './InputBox.module.css';
const InputBox = () => {
  return (
    <div>
      <input type='text' placeholder='Input Text' />
      <button type='button' className={style.button_style}>ADD</button>
    </div>
  )
}

export default InputBox
