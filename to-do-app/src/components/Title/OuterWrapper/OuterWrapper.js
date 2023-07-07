import React from 'react';
import Title from '../Title/Title';
import style from './OuterWrapper.module.css';
const OuterWrapper = () => {
  return (
   <div className={style.outer}>
     <Title></Title> 
    </div>
  )
}

export default OuterWrapper;
