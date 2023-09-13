
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./order.css";


function Order({ setOrdersCount }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders/getallorders')
      .then((response) => {
        console.log('Response:', response);
        if (response.data) {
          console.log('Data:', response.data);
          setOrders(response.data);
          setLoading(false);
           // Pass the orders.length to the parent component (Home)
           setOrdersCount(response.data.length);
        } else {
          console.error('Empty response data');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='order'>
      <Sidebar />
      <div className='orderContainer'>
        <Navbar />
        {/* getting oders */}

        <h1>Orders Available</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="App-header">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>OrderItems</th>
                  <th>Order Total</th>
                  <th>address</th>
                  <th>contact</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td> {order._id}</td>
                    <td> {order.name}</td>
                    <td>
                      <ul>
                        {order.orderItems.map((orderItem) => (
                          <li key={orderItem.productName}>
                            {orderItem.name}- Quantity:{orderItem.Quantity}, Price:{orderItem.price}, Variant:{orderItem.variant}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>ush{order.orderAmount.toFixed(2)}</td>
                    <td>{order.address}</td>
                    <td>{order.contact}</td>
                    <td>
                      {new Date(order.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
                <td></td>
              </tbody>
            </table>

          </div>
        )}

      </div>
    </div>

  );
}

export default Order;

