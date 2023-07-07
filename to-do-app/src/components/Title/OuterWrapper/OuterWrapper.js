import React from 'react';
import Title from '../Title/Title';
import style from './OuterWrapper.module.css';
import InputBox from '../../InputBox/InputBox';
const OuterWrapper = () => {
  return (
   <div className={style.outer}>
     <Title></Title> 
     <InputBox/>
    </div>
  )
}

export default OuterWrapper;
