import React from 'react';
import { db } from '../../config/firebaseConfig';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./order.css";

const Order = () => {
    //getting todo
  const [order, setOrder] = useState([]);
  const orderCollectionRef = collection(db, "order");

  useEffect(()=>{

    const getOrder =async () =>{
    const data = await getDocs(orderCollectionRef);
    // console.log(data);
    setOrder(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
    };
    getOrder();
  },[]);
  return (
    <div className='order'>
        <Sidebar/>
    <div className='orderContainer'>
        <Navbar/>
      {/* getting oders */}
       <div className='display'>
      
      {order.map((order) =>{
        return(
          <div className='display1'>
            {/* <h3>category:{order.map((item)=>{
                return(
                    <>
                    <p>{item.category}</p>
                    </>
                )
                
            })}</h3> */}
            <h3>description:{order.description}</h3>
            <h3>img:{order.image}</h3>
            <h3>price:{order.price}</h3>
            <h3>quantity:{order.quantity}</h3>
            <h3>Address:{order.address}</h3>
            <h3>city:{order.city}</h3>
            <h3>country:{order.country}</h3>
            <h3>name:{order.name}</h3>
            <h3>email:{order.email}</h3>
            <h3>phone:{order.phone}</h3>
            
            </div>
        )})}
    </div>
    </div>
    </div>
  )
}

export default Order
