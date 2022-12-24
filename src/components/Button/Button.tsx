import { Button } from "antd";
interface btnComponent{
    className:string,
    onclick:any,
    icon:any,
    text:string,
}
{/* <ButtonComponent 
className='login'
 onclick={()=>{console.log('dasdas')}} 
icon={<UpCircleOutlined/>}> login
</ButtonComponent> */}



const style={
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    width:"auto",
    height:'auto',
    padding:'0.6rem',
    background:"#5A55D2",
}
const ButtonComponent=({className,onclick,icon,text}:btnComponent)=>{
    return (
        <Button
        style={style} 
        className={className? `btn-component-${className}`:"btn-component"} 
        onClick={onclick}
        icon={icon?icon:null}>
            {text?text:null}
        </Button>
    )
}
export default ButtonComponent;