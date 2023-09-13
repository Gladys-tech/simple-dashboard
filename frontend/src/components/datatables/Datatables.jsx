import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

function CakeCard({ cake }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={cake.image}
        alt=""
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150'; // Replace with a publicly hosted placeholder image URL
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cake.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cake.description}
        </Typography>
        {Object.entries(cake.prices).map(([variant, price]) => (
          <div key={variant}>
            <strong>{variant}:</strong> {Object.entries(price).map(([size, value]) => (
              <span key={size}>{size}: {value} </span>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function Datatables() {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cakes/getallcakes')
      .then((response) => {
        if (response.data) {
          // Replace backslashes with forward slashes in image URLs
          const cakesWithFixedImagePaths = response.data.map((cake) => ({
            ...cake,
            image: cake.image.replace(/\\/g, '/'), // Replace backslashes with forward slashes
          }));

          setCakes(cakesWithFixedImagePaths);
          setLoading(false);
        } else {
          console.error('Empty response data');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-header1">
      <div className="datatableTitle" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
      <p style={{color:'teal', fontSize:'20px'}}>All Products</p>
        <Link to="/products/new" className="link" style={{textDecoration:'none', fontSize:'15px', color:'white',backgroundColor:'teal', cursor:'pointer', margin:'10px', border:'2px solid teal', borderRadius:'8px', padding:'5px'}}>add new</Link>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="App-header">
          <Grid container spacing={2}>
            {cakes.map((cake) => (
              <Grid item key={cake._id} xs={12} sm={6} md={4} lg={3}>
                <CakeCard cake={cake} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Datatables;
