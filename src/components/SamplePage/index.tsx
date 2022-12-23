import AddForm from './AddForm';
import SamplePageShow from './SamplePageShow';

//import hooks
import { useState } from 'react';

// import interface
import { IValueSample } from '../../reducers/samplePageSlice';

export const valueSample: IValueSample = {
    id: '',
    name: '',
    title: ''
};

export const TestPage = () => {
  const [indexEdit, setIndexEdit] = useState(-1);
  const [dataSubmit,setDataSubmit]= useState<IValueSample>(valueSample);

  return <div>
    <AddForm indexEdit = {indexEdit} setIndexEdit = {setIndexEdit} dataSubmit={dataSubmit} setDataSubmit={setDataSubmit}/>
    <SamplePageShow setIndexEdit = {setIndexEdit} setDataSubmit={setDataSubmit}/>
  </div>;
};