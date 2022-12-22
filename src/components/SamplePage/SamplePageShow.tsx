// import redux
import { deleteData, middleware } from "../../reducers/samplePageSlice";
import { SamplePage } from '../../reducers/samplePageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//import interface
import { IinitialState } from "../../reducers/samplePageSlice";
import { IValueSample } from "../../reducers/samplePageSlice";

//import react
import { useEffect } from "react";

// props interface
interface props{
  setIndexEdit: React.Dispatch<React.SetStateAction<number>>, 
  setDataSubmit: React.Dispatch<React.SetStateAction<IValueSample>>
};

const SamplePageShow = ({setIndexEdit, setDataSubmit} : props) =>{
  // useAppSelector to get the data you want in the store.ts
  const SamplePageData = useAppSelector(SamplePage);
  // useAppDispatch to get the function to call the action in the reducers
  const dispatch = useAppDispatch();

  const handleRemove = (element: IValueSample) => {
    dispatch(deleteData(element));
    // call api to delete data; async await
  }

  const handleEdit = (element: IValueSample, index:number) => {
    setIndexEdit(index);
    setDataSubmit(element);
  }

  useEffect(()=>{
    dispatch(middleware());
  },[]);

  const renderUIData = (objectData: IinitialState)=>{
    return objectData.data.map((element:IValueSample, index: number)=>{
      return <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.title}</td>
        <button onClick={()=>{handleRemove(element)}}>Delete</button>
        <button onClick={()=>{handleEdit(element, index)}}>Edit</button>
      </tr>
    });
  }

  return (
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>title</th>
      </tr>
      {renderUIData(SamplePageData)}
    </table>
  );
}

export default SamplePageShow;