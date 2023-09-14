import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from 'react-router-dom';
import './single.css';

const Single = () => {


  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: userId } = useParams();
  const { email: userEmail } = useParams();

  if (!userEmail) {
    // Handle the case where userEmail is missing or invalid
    console.error('Invalid userEmail:', userEmail);
    // You can redirect the user to an error page or take appropriate action.
  }

  useEffect(() => {
    // Replace this with your API endpoint to fetch user data
    fetch(`http://localhost:5000/api/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return (response.json());
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);

      });

  }, [userId]);

  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='container'>
          <div className='top2'>
            <div className='left2'>
              <div className='editButton'>Edit</div>
              <h1 className='title'>Information</h1>
              {loading ? (
                <p>Loading user data...</p>
              ) : (
                <div className='item'>
                  <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=750&w=1260" alt="" className='itemImg' />
                  <div className='details'>
                    <h1 className='itemTitle'>{userData.name}</h1>
                    <div className='detailItem'>
                      <span className='itemKey'>Email:</span>
                      <span className='itemValue'>{userData.email}</span>
                    </div>
                    {/* <div className='detailItem'>
                      <span className='itemKey'>Phone:</span>
                      <span className='itemValue'>{userData.phone}</span>
                    </div>
                    <div className='detailItem'>
                      <span className='itemKey'>Address:</span>
                      <span className='itemValue'>{userData.address}</span>
                    </div>
                    <div className='detailItem'>
                      <span className='itemKey'>Country:</span>
                      <span className='itemValue'>{userData.country}</span>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
            <div className='right2'>
              <Chart className="chart" aspect={3 / 1} title="User Spending " />
            </div>
          </div>
          <div className='bottom2'>
            <h1 className='title'>Last Transaction</h1>
            <List userId={userId} userEmail={userEmail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
