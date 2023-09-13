import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = ({ userId, userEmail }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      // Fetch orders for the specific user by email
      axios.get(`http://localhost:5000/api/orders/getordersbyemail/${userEmail}`)
        .then((response) => {
          if (response.data) {
            setOrders(response.data);
            setLoading(false);
          } else {
            console.error('Empty response data');
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      // Fetch all orders
      axios.get('http://localhost:5000/api/orders/getallorders')
        .then((response) => {
          if (response.data) {
            setOrders(response.data);
            setLoading(false);
          } else {
            console.error('Empty response data');
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [userEmail, userId]);
  
  const handleStatusToggle = (orderId) => {
    // Find the order in the local state
    const orderToUpdate = orders.find((order) => order._id === orderId);

    if (!orderToUpdate) {
      console.error('Order not found in local state');
      return;
    }

    // Toggle the status
    const newStatus = orderToUpdate.status === "Approved" ? "Pending" : "Approved";
    
    // Send a PUT request to update the status in the database
    axios.put(`http://localhost:5000/api/orders/updatestatus/${orderId}`, {
      status: newStatus,
    })
    .then((response) => {
      if (response.data.success) {
        // Update the status in the local state
        const updatedOrders = orders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
      } else {
        console.error('Status update failed');
      }
    })
    .catch((error) => {
      console.error('Error updating status:', error);
    });
  };

  // Filter orders based on the selected user's ID
  const filteredOrders = userEmail 
    ? orders.filter((order) => order.userEmail === userEmail)
    : orders;
    console.log('Filtered Orders:', filteredOrders);

  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell className='tableCell'>OrderItems</TableCell>
              <TableCell className='tableCell'>Customer</TableCell>
              <TableCell className='tableCell'>Date</TableCell>
              <TableCell className='tableCell'>Amount</TableCell>
              <TableCell className='tableCell'>Payment Method</TableCell>
              <TableCell className='tableCell'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7}>Loading...</TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell className='tableCell'>
                    <div className='cellWrapper'>
                      <ul>
                        {order.orderItems.map((orderItem) => (
                          <li key={orderItem._id}>
                            {orderItem.name} - Quantity: {orderItem.Quantity}, Price: {orderItem.price}, Variant: {orderItem.variant}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TableCell>
                  <TableCell className='tableCell'>{order.name}</TableCell>
                  <TableCell className='tableCell'>{new Date(order.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</TableCell>
                  <TableCell className='tableCell'>{`$${order.orderAmount.toFixed(2)}`}</TableCell>
                  <TableCell className='tableCell'>Cash on Delivery</TableCell>
                  <TableCell className='tableCell'>
                    <span
                      className={`status ${order.status}`}
                      onClick={() => handleStatusToggle(order._id)}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
