import balanceImg from '../../assets/image/balanceIllustration.png'
import TabCard from '../TabCard/TabCard';
const balanceAmount = 8890.20;

const Balances = () => {
    return (
        <TabCard>
            <div>
                <p className='title'>Balances</p>
                <p className="small"><span className='medium blue'>$</span> Dollar:</p>
                <p className="title blue">{balanceAmount.toFixed(2)}</p>
                <img className='img' src={balanceImg} />
            </div>
        </TabCard>
    )
}
export default Balances