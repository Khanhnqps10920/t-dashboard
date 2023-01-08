import "./styles/Card.scss"
interface PropCard{
    children:JSX.Element;
}
const TabCard=({children}:PropCard)=>{
    return(
        <div className='tabcard'>
            {children}
        </div>
    )
}
export default TabCard;