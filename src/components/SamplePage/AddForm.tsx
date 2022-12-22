import React, { useState } from 'react';

// import Redux
import { useAppDispatch } from '../../redux/hooks';
import { addData } from '../../reducers/samplePageSlice';
import { nanoid } from '@reduxjs/toolkit';

// import Interface
import { IValueSample } from '../../reducers/samplePageSlice';

const valueSample: IValueSample = {
  id: '',
  name: '',
  title: ''
};

const AddForm = () =>{
  //state and actions from Slice
  const dispatch = useAppDispatch();

  //useState for submit
  const [dataSubmit,setDataSubmit]= useState(valueSample);

  //Handle the data input
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataSubmit({...dataSubmit, [name]: value});
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(dataSubmit.name && dataSubmit.title){
      dispatch(addData({...dataSubmit, id:nanoid()}));
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