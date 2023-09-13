import React from 'react';
import "./widget.css";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Widget = ({ type, ordersCount, usersCount }) => {
    const navigate = useNavigate();

    let data;
    let count;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: (
                    <PersonOutlinedIcon className='icon'
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }} />
                ),

            };
            count = usersCount;
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "view all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='icon'
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                        }} />
                ),

            };
            count = ordersCount;
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon'
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                        }} />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see all details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className='icon'
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                        }} />
                ),
            };
            break;
        default:
            break;
    }

    const handleLinkClick = () => {
        // Determine the target page based on the widget type
        if (type === 'user') {
            navigate('../users'); // Navigate to the Users page
        } else if (type === 'order') {
            navigate('../orders'); // Navigate to the Orders page
        }
        // Add more conditions for other widget types if needed
    };

    return (
        
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counte'>
                    {data.isMoney ? `$ ${count}` : count}
                </span>
                <div
                    className='link'
                    onClick={handleLinkClick} // Handle click to navigate
                    style={{ cursor: 'pointer' }} // Add cursor style
                >
                    {data.link}
                </div>
            </div>
            <div className='right'>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
