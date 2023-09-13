import React from 'react'
import { useContext } from 'react'
import './sidebar.css'
import { DarkModeContext } from '../../context/darkModeContext'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration: "none"}}>
        <span className='logo'>gladys k</span>
        </Link> 
      </div>
      <hr></hr>
      <div className='center'>
        <ul>
            <p className='title'>MAIN</p>
            <Link to="/" style={{textDecoration: "none"}}>
            <li><DashboardIcon className='icon'/><span>dashboard</span></li>
            </Link>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li><PersonOutlineOutlinedIcon className='icon'/><span>users</span></li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
            <li><InventoryIcon  className='icon'/><span>products</span></li>
            </Link>
            <Link to="/orders" style={{textDecoration: "none"}}>
            <li><BorderColorIcon  className='icon'/><span>orders</span></li>
            </Link>
            <li><LocalShippingIcon  className='icon'/><span>delivery</span></li>
            <li>< NotificationsNoneIcon  className='icon'/><span>notifications</span></li>
            <li><PauseCircleFilledIcon  className='icon'/><span>status</span></li>
            <li><SettingsApplicationsIcon  className='icon'/><span>settings</span></li>
            <p className='title'>USER</p>
            <li><AccountCircleIcon  className='icon'/><span>profile</span></li>
            <li><ExitToAppIcon  className='icon'/><span>logout</span></li>


        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'
        onClick={() => dispatch({ type: "LIGHT"})}>
        </div>

        <div className='colorOption'
        onClick={() => dispatch({ type: "DARK"})}>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
