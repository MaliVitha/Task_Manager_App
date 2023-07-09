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
     <WorkRecord  title="Sample Title One" />
     <WorkRecord  title="Working with use state" />
    
    </div>
  )
}

export default OuterWrapper;
