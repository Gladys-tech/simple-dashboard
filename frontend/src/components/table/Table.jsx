import React from 'react';
import "./table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

  const rows =[
    {
      id:1143155,
      img:"https://m.media-amazon.com/images/I/81bc8mA3nkL._AC_UY327_FMwebp_QL65_.jpg",
      product:"Acer Nitro 5",
      customer:"john smith",
      date:"1 march",
      amount:785,
      method:"cash on delivery",
      status:"Approved",
    },
    {
      id:1143155,
      img:"https://m.media-amazon.com/images/I/81bc8mA3nkL._AC_UY327_FMwebp_QL65_.jpg",
      product:"Acer Nitro 5",
      customer:"john smith",
      date:"1 march",
      amount:785,
      method:"cash on delivery",
      status:"Pending",
    },
    {
      id:11431556,
      img:"https://m.media-amazon.com/images/I/81bc8mA3nkL._AC_UY327_FMwebp_QL65_.jpg",
      product:"Acer Nitro 5",
      customer:"john smith",
      date:"1 march",
      amount:785,
      method:"cash on delivery",
      status:"Pending",
    },
    {
      id:11431,
      img:"https://m.media-amazon.com/images/I/81bc8mA3nkL._AC_UY327_FMwebp_QL65_.jpg",
      product:"Acer Nitro 5",
      customer:"john smith",
      date:"1 march",
      amount:785,
      method:"online payment",
      status:"Approved",
    },
    {
      id:11155,
      img:"https://m.media-amazon.com/images/I/81bc8mA3nkL._AC_UY327_FMwebp_QL65_.jpg",
      product:"Acer Nitro 5",
      customer:"john smith",
      date:"1 march",
      amount:785,
      method:"cash on delivery",
      status:"Pending",
    },
  ]
  return (
    <div className='table'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>tracking id</TableCell>
            
            <TableCell className='tableCell'>product</TableCell>
            <TableCell className='tableCell'>customer</TableCell>
            <TableCell className='tableCell'>date</TableCell>
            <TableCell className='tableCell'>amount</TableCell>
            <TableCell className='tableCell'>payment method</TableCell>
            <TableCell className='tableCell'>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt="" className='image'/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List;
