import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./datatable.css";
import { Link } from 'react-router-dom';
import {userColumns, userRows} from "../../datatablesource";




const Datatable = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !==id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName:"Action",
            width:200,
            renderCell: (params) =>{
                return(
                <div className='cellAction'>
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className='viewButton'>view</div>
                    </Link>
                    <div className='deleteButton' onClick={() =>handleDelete(params.row.id)}>delete</div>
                </div>
                );
            },
        },
    ];
  return (
    <div className='datatable'>
        <div className='datatableTitle'>
            add new user
            <Link to="/users/new" className='link'>add new</Link>
        </div>
      <DataGrid
      className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
