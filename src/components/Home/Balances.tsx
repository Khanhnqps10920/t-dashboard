import balanceImg from '../../assets/image/balanceIllustration.png'
import './styles/Balances.scss'

const balanceAmount = 8890.20;

const Balances = () => {
    return (
        <div className="balances">
            <h2 className='balances__title'>Balances</h2>
            <div className="balances__amount">
                <p className="balances__amount__top">
                    <span className='currency'>$</span> Dollar:
                </p>
                <p className="balances__amount__bottom">{balanceAmount.toFixed(2)}</p>
            </div>
            <div className="balances__img">
                <img src={balanceImg} />
            </div>
        </div>
    )
}

export default Balances