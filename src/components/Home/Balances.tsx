import balanceImg from '../../assets/image/balanceIllustration.png'
import TabCard from './Card';
const balanceAmount = 8890.20;

const Balances = () => {
    return (
        <TabCard>
            <div>
                <p className='tabcard__title'>Balances</p>
                <p className="tabcard__small"><span className='tabcard__medium blue'>$</span> Dollar:</p>
                <p className="tabcard__title blue">{balanceAmount.toFixed(2)}</p>
                <img className='tabcard__img' src={balanceImg} />
            </div>
        </TabCard>
    )
}
export default Balances