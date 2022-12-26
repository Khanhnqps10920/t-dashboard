import { Button } from "antd";
interface Propsbtn{
    text:string,
    background:string,
    propsANT:{},
}




const CustomBTN=({text,background,propsANT}:Propsbtn)=>{
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
        <Button style={style}{...propsANT}>{text?text:null}</Button>
    )
}
export default CustomBTN;