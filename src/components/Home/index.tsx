import React from 'react';
import './styles/Home.scss';
import Order from './Order';
import Stats from './Stats';
import Balances from './Balances';
import RecentOrders from './RecentOrders';
import { Team } from './\bTeam';

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
      <div className="top row">
        <div className="orders">{renderedOrders}</div>
      </div>

      <div className="middle row">
        <Stats />
        <Balances />
      </div>

      <div className="bottom row">
        <RecentOrders />
        <Team />
      </div>
    </div>
  );
};
