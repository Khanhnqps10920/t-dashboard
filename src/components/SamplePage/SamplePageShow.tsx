// import redux
import { deleteData } from "../../reducers/samplePageSlice";
import { SamplePage } from '../../reducers/samplePageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

//import interface
import { IinitialState } from "../../reducers/samplePageSlice";

const SamplePageShow = () =>{
  const SamplePageData = useAppSelector(SamplePage);
  const dispatch = useAppDispatch();

  const renderUIData = (objectData: IinitialState)=>{
    return objectData.data.map(element=>{
      return <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.title}</td>
        <button onClick={()=>{dispatch(deleteData);}}>Delete</button>
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