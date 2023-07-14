import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { Button, Label } from '@my-libs/components';
import { getOrders, Order, formatText } from '@my-libs/utils';

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders().then((ordersFromApi) => {
      setOrders(ordersFromApi);
      console.log(ordersFromApi);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button text="test button" />
      {orders.map((order) => (
        <Label text={`${formatText(order.product)} - ${order.quantity}`} />
      ))}
    </>
  );
}

export default App;
