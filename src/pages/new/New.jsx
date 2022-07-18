import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./new.css";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from '../../config/firebaseConfig';

const New = ({inputs, title}) => {

   //posting 
   const[newInput, setNewInput] =useState("")
   const createTodo =async () =>{
      await addDoc(todoCollectionRef,{input: newInput});
      alert("to-do created"); 
   }


   const [todo, setTodo] = useState([]);
  const todoCollectionRef = collection(db, "todo");

  const [file, setFile] = useState("");
  console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top3'>
          <h1>{title}</h1>
        </div>
        <div className='bottom3'>
          <div className='left3'>
            <img src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=750&w=1260"} 
            alt=''/>
          </div>
          <div className='right3'>
            <form>
            <div className='formInput'>
                <label htmlFor='file'> Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
              <div className='formInput' key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} onChange={(event)=>{setNewInput(event.target.value);}}/>
              </div>
              ))}
              {/* <div className='formInput'>
                <label>full names</label>
                <input type="text" placeholder="gladys kulyenvu"/>
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type="email" placeholder="gladys@gmail.com"/>
              </div>
              <div className='formInput'>
                <label>phone no</label>
                <input type="text" placeholder="0757763516"/>
              </div>
              <div className='formInput'>
                <label>password</label>
                <input type="password" />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type="text" placeholder="kampala"/>
              </div>
              <div className='formInput'>
                <label>country</label>
                <input type="text" placeholder="uganda"/>
              </div> */}
              <button onClick={createTodo}>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
