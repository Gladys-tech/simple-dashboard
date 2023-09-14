import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './datatable.css';


const Datatable = () => {
  const [users, setUsers] = useState([]); // State to store user data

  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get('http://localhost:5000/api/users') // Replace with your API endpoint
      .then((response) => {
        setUsers(response.data); // Update state with user data
        console.log("API Response:", response.data);
      })

      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((response) => {
        console.log('User deleted successfully');
        toast.success('User deleted successfully'); // Show success toast
        // Implement any necessary logic after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        toast.error('Error deleting user'); // Show error toast
        // Handle errors, e.g., show an error message to the user
      });
  };



  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'isAdmin', headerName: 'isAdmin', width: 200 },

    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/users/${params.row._id} ?email=${params.row.email}`}  style={{ textDecoration: 'none' }}>
              <div className='viewButton'>view</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row._id)}>delete</div>

          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className='datatableTitle'>
        All Users
        
      </div>
      <div className='data-grid-container' style={{ height: '500px' }}>
        <DataGrid

          rows={users} // Use the fetched user data
          getRowId={(row) => row._id}
          columns={columns} // Only action column is shown
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
      </div>

    </div>
  );
};

export default Datatable;
