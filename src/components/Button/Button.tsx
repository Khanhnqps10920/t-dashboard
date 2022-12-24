import { Button } from "antd";
interface btnComponent{
    icon:any,
    text:string,
    className:string,
    onclick:any,
}
// {demo
     /*  <ButtonComponent type="dashed" 
icon={<i className="fa-solid fa-download"></i>} 
text="abcxyz" className="abc" 
onclick={()=>{console.log('dasdsda')}}/> */


const ButtonComponent=({icon,text,className,onclick,}:btnComponent)=>{
    const style={
        display:"flex",
        alignItems:'center',
    }
    return (
        <Button  style={style} 
        className={className? `btn-component-${className}`:"btn-component"} 
        onClick={onclick}>
            {icon?<span>{icon}</span>:null}
            {text?<span>{text}</span>:null} 
        </Button>
    )
}
export default ButtonComponent;