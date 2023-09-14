import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./order.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        {/* getting orders */}
        <div className='datatableTitle'>
        All Orders
        
      </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="App-header">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>OrderItems</TableCell>
                    <TableCell>Order Total</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell>{order._id}</TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>
                        <ul>
                          {order.orderItems.map((orderItem) => (
                            <li key={orderItem.productName}>
                              {orderItem.name}- Quantity:{orderItem.Quantity}, Price:{orderItem.price}, Variant:{orderItem.variant}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>ush{order.orderAmount.toFixed(2)}</TableCell>
                      <TableCell>{order.address}</TableCell>
                      <TableCell>{order.contact}</TableCell>
                      <TableCell>
                        {new Date(order.createdAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </TableCell>
                      <TableCell className={`status ${order.status}`}>{order.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
