import React, { useState } from 'react';

// import Redux
import { useAppDispatch } from '../../redux/hooks';
import { addData, editData } from '../../reducers/samplePageSlice';
import { nanoid } from '@reduxjs/toolkit';

// import Interface
import { IValueSample } from '../../reducers/samplePageSlice';

import { valueSample } from '.';

interface Iprops{
  indexEdit: number, 
  setIndexEdit: React.Dispatch<React.SetStateAction<number>>, 
  dataSubmit: IValueSample, 
  setDataSubmit: React.Dispatch<React.SetStateAction<IValueSample>>
};

const AddForm = ({indexEdit, setIndexEdit, dataSubmit, setDataSubmit} : Iprops) =>{
   // useAppDispatch to get the function to call the action in the reducers
  const dispatch = useAppDispatch();

  //Handle the data input
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataSubmit({...dataSubmit, [name]: value});
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(dataSubmit.name && dataSubmit.title){
      console.log(indexEdit);
      if(indexEdit <= -1){
        dispatch(addData({...dataSubmit, id:nanoid()}));
        // call API to post the new data; await async
      }
      else{
        dispatch(editData({dataSubmit, indexEdit}));
        // call API to put the new data; await async
        setIndexEdit(-1);
      }
    }
    setDataSubmit(valueSample);
  }
  //Handle the data input

  return (
    <form action="" onSubmit={(event)=>{onSubmit(event)}}>
      <input type="text" name="name" value={dataSubmit.name} onChange={(event)=>{onChangeInput(event)}}/>
      <input type="text" name="title" value={dataSubmit.title} onChange={(event)=>{onChangeInput(event)}}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;