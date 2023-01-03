import './styles/Order.scss'

export type OrderType = {
    amount: number,
    product: string,
    date: string,
}

type OrderPropsType = {
    order: OrderType
}

const Order = ({ order }: OrderPropsType) => {
    return (
        <div className="order">
            <h2 className='order__amount'>{order.amount}</h2>
            <p className='order__product'>{order.product}</p>
            <p className='order__date'>Created: {order.date}</p>
        </div>
    )
}

export default Order