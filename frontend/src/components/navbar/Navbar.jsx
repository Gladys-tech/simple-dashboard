import React from 'react';
import "./navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
    const {dispatch} = useContext(DarkModeContext);
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
    
    // Event handler to update the search query
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    
    // Function to handle the search action (e.g., navigate to search results page)
    const handleSearch = () => {
        // Implement your search functionality here
        console.log('Search Query:', searchQuery);
        // You can navigate to a search results page or perform any other desired action
    };
    
    // Handle search when the user presses Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className='search'>
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange} // Update the search query
                onKeyPress={handleKeyPress} // Handle Enter key press
            />
            <SearchOutlinedIcon onClick={handleSearch} className='search-icon' />
        </div>
        <div className='items'>
            <div className='item'>
                <LanguageOutlinedIcon  className='icon'/>
                English
            </div>
            <div className='item'>
                <DarkModeOutlinedIcon  className='icon'
                onClick={() => dispatch({type: "TOGGLE"})}/>
            </div>
            <div className='item'>
                <FullscreenExitOutlinedIcon  className='icon'/>
            </div>
            <div className='item'>
                <NotificationsNoneOutlinedIcon  className='icon'/>
                <div className='counter'>1</div>
            </div>
            <div className='item'>
                <ChatBubbleOutlineOutlinedIcon  className='icon'/>
                <div className='counter'>2</div>
            </div>
            <div className='item'>
                <ListOutlinedIcon  className='icon'/>
            </div>
            <div className='item'>
                <img
                src="" alt="" className='avatar'/>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
