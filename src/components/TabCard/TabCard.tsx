import "./tabCard.scss"
interface PropTabCard{
    children:JSX.Element;
}
const TabCard=(props:PropTabCard)=>{
    return(
        <div className='tabcard'>
            {props.children}
        </div>
    )
}
export default TabCard;