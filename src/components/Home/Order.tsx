import TabCard from './Card'
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
                <p className='tabcard__large green'>{order.amount}</p>
                <p className='tabcard__medium'>{order.product}</p>
                <p className='tabcard__small'>Created: {order.date}</p>
            </div>
        </TabCard>
    )
}
export default Order