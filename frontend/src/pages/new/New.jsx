import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./new.css";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const New = ({  searchQuery,title }) => {

  const [cakes, setCakes] = useState([]);
  const [newInput, setNewInput] = useState("");
  const [file, setFile] = useState(null);
  const [variants, setVariants] = useState([]);
  const [prices, setPrices] = useState([]);
  const [description, setDescription] = useState("");

  const createCake = async () => {
    try {
      const formData = new FormData();

      formData.append("name", newInput);
      formData.append("description", description);
      formData.append("image", file);

      // Check if variants and prices arrays have the same length
      if (variants.length !== prices.length) {
        console.error('Variants and prices arrays have different lengths.');
        return;
      }

      // Transform prices array into an object with variants as keys
      variants.forEach((variant, index) => {
        formData.append(`variants[${index}]`, variant);
        formData.append(`prices[${index}]`, prices[index]);
      });

      const response = await fetch('http://localhost:5000/api/cakes/', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        // Successful creation, show a success notification
        toast.success("Cake created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Handle error or show an error message
        console.error("Error creating cake");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
};

const handleSearch = () => {
  // Implement your search functionality here
  console.log('Search Query:', searchQuery);

  // Perform the search and update the product list accordingly
  // You can use the 'searchQuery' to filter and display relevant products
  const filteredProducts = cakes.filter((cake) => {
      return cake.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Update the product list with filtered results
  setCakes(filteredProducts);
};


  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar onSearch={handleSearch}/>
        <div className='top3'>
          <h1>{title}</h1>
        </div>
        <div className='bottom3'>
          <div className='left3'>
            {/* Display the uploaded image */}
            {file && (
              <img
                src={file ? URL.createObjectURL(file) : ""}
                alt=''
              />
            )}
          </div>
          <div className='right3'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'> Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              <div className='formInput'>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter cake name"
                  onChange={(event) => setNewInput(event.target.value)}
                />
              </div>
              <div className='formInput'>
                <label>Variants</label>
                <input
                  type="text"
                  placeholder="Enter variants separated by commas"
                  onChange={(event) => {
                    const variantsArray = event.target.value.split(',').map((variant) => variant.trim());
                    setVariants(variantsArray);
                  }}
                />
              </div>
              <div className='formInput'>
                <label>Prices</label>
                <input
                  type="text"
                  placeholder="Enter prices separated by commas"
                  onChange={(event) => {
                    const pricesArray = event.target.value.split(',').map((price) => price.trim());
                    setPrices(pricesArray);
                  }}
                />
              </div>
              <div className='formInput'>
                <label>Description</label>
                <textarea
                  placeholder="Enter cake description"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <button type="button" onClick={createCake}>Create product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
