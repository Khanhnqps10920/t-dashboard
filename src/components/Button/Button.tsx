import { Button } from "antd";
interface Propsbtn{
    className:string,
    onclick:()=>void,
    icon:any,
    text:string,
    background:string,
}
{/* <ButtonComponent 
className='login' 
background='violet'
 onclick={()=>{console.log('dasdas')}} 
icon={<UpCircleOutlined/>}> login
</ButtonComponent> */}



const CustomBTN=({className,onclick,icon,text,background}:Propsbtn)=>{
    const style={
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        width:"auto",
        height:'auto',
        padding:'0.6rem',
        background:background=='violet' ? '#5A55D2':"#FFFFFF",
        color:background=='violet' ? '#ffffff' :"#575C76",
    }
    return (
        <Button
            style={style} 
            className={className? `btn-${className}`:"btn-component"} 
            onClick={onclick}
            icon={icon?icon:null}>
                {text?text:null}
        </Button>
    )
}
export default CustomBTN;