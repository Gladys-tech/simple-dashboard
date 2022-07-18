import React from 'react';
// import "./Singles.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table"

const Singles = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='container'>
        <div className='top2'>
          <div className='left2'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=750&w=1260" alt="" className='itemImg'/>
              <div className='details'>
                <h1 className='itemTitle'>gladys k</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>glad@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>0756773516</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>kampala kibuli</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>uganda</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right2'>
            <Chart  className="chart" aspect={3/1} title="User Spending "/>
          </div>
        </div>
        {/* <div className='bottom2'>
          <h1 className='title'>last transaction</h1>
          <List/>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Singles

