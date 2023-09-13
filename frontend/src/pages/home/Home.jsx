import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import "./home.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [ordersCount, setOrdersCount] = useState(0); // Initialize ordersCount
  const [usersCount, setUsersCount] = useState(0); // Initialize usersCount


  // Fetch ordersCount data from the Order component
  useEffect(() => {
    axios.get('http://localhost:5000/api/orders/getallorders')
      .then((response) => {
        if (response.data) {
          setOrdersCount(response.data.length);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users') // Replace with your API endpoint
      .then((response) => {
        if (response.data) {
          setUsersCount(response.data.length);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>


        <Widget type="user" usersCount={usersCount} />

          {ordersCount > 0 ? (
            <Widget type="order" ordersCount={ordersCount} />
          ) : (
            <div>Loading orders count...</div>
          )}
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Last transactions</div>
          <List />
        </div>
      </div>

    </div>
  )
}

export default Home
