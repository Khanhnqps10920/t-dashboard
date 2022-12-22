// import redux
import { deleteData, middleware } from "../../reducers/samplePageSlice";
import { SamplePage } from '../../reducers/samplePageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//import interface
import { IinitialState } from "../../reducers/samplePageSlice";
import { IValueSample } from "../../reducers/samplePageSlice";

//import react
import { useEffect } from "react";

const SamplePageShow = () =>{
  const SamplePageData = useAppSelector(SamplePage);
  const dispatch = useAppDispatch();

  const handleRemove = (element: IValueSample) => {
    dispatch(deleteData(element));
    // call api to delete here async await
  }

  useEffect(()=>{
    dispatch(middleware());
  },[]);

  const renderUIData = (objectData: IinitialState)=>{
    return objectData.data.map(element=>{
      return <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.title}</td>
        <button onClick={()=>{handleRemove(element)}}>Delete</button>
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