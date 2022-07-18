import React from 'react';
// import "./lists.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatables from '../../components/datatables/Datatables';

const Lists = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatables/>
      </div>
    </div>
  )
}

export default Lists;


