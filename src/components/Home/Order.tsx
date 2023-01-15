import TabCard from '../TabCard/TabCard'
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
        <TabCard>
            <div>
                <p className='large green'>{order.amount}</p>
                <p className='medium'>{order.product}</p>
                <p className='small'>Created: {order.date}</p>
            </div>
        </TabCard>
    )
}
export default Order