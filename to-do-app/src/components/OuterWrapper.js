import React from 'react';
import Title from './Title/Title';
import style from './OuterWrapper.module.css';
import InputBox from './InputBox/InputBox';
import WorkRecord from './WorkRecord/WorkRecord';
const OuterWrapper = () => {
  return (
   <div className={style.outer}>
     <Title/>
     <InputBox/>
     <WorkRecord/>
    </div>
  )
}

export default OuterWrapper;
