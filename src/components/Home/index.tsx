import React from 'react';
import './styles/Home.scss';
import Order from './Order';
import Stats from './Stats';
import Balances from './Balances';
import RecentOrders from './RecentOrders';
import Team from './Team';

const orders = [
  {
    amount: 20,
    product: 'Sneaker',
    date: '22/12/2022',
  },
  {
    amount: 20,
    product: 'Sneaker',
    date: '22/12/2022',
  },
  {
    amount: 20,
    product: 'Sneaker',
    date: '22/12/2022',
  },
  {
    amount: 20,
    product: 'Sneaker',
    date: '22/12/2022',
  },
];

const balanceAmount = '9988.79';
export const Home = () => {
  const renderedOrders = orders.map((order, index) => (
    <Order key={index} order={order} />
  ));

  return (
    <div className="home">
      <div className="top">
        <div className="orders">{renderedOrders}</div>
      </div>
      <div className="middle">
        <div className='left'>
          <Stats />
        </div>
        <div className='right'>
          <Balances />
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <RecentOrders />
        </div>
        <div className='right'>
          <Team />
        </div>
      </div>
    </div>
  );
};
