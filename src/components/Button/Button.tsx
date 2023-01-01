import { Button } from "antd"
import './button.scss'
// demo <CustomButton className='white' icon={<UpCircleOutlined/>} onClick={()=>{console.log('asdadss')}} text='login'/>
interface propsBtn{
    className:string,
    onClick:()=>void,
    icon:JSX.Element,
    text:string
}
const CustomButton=({className,onClick,icon,text}:propsBtn)=>{
    return <Button className={`customBtn-${className}`} icon={icon} onClick={onClick}>{text}</Button>
}
export default CustomButton;