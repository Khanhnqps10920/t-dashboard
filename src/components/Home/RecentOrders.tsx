import { Table } from 'antd'
import { OrderType } from './Order'
import { ColumnsType } from 'antd/es/table'
import './styles/RecentOrders.scss'

type RecentOrdersDataType = OrderType & { key: string }


const columns: ColumnsType<RecentOrdersDataType> = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Created on',
        dataIndex: 'date',
        key: 'date',
    }
]

const data: RecentOrdersDataType[] = [
    {
        key: '1',
        product: 'Sneaker',
        amount: 20,
        date: '22/12/2022'
    },
    {
        key: '2',
        product: 'Sneaker',
        amount: 20,
        date: '22/12/2022'
    },
    {
        key: '3',
        product: 'Sneaker',
        amount: 20,
        date: '22/12/2022'
    },
]


const RecentOrders = () => {
    return <div className='recent-orders'>
        <h2>Recent Orders</h2>
        <Table showHeader={false} columns={columns} dataSource={data} pagination={false} />
    </div>
}

export default RecentOrders