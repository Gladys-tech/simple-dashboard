
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
// import Login from './components/Login/index';
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Singles from "./pages/singles/Singles";
import Lists from "./pages/lists/Lists";
import Order from "./pages/orderdetails/Order";
import { ToastContainer } from 'react-toastify';
// import Signup from "./components/Signup";


function App() {

  const {darkMode} = useContext(DarkModeContext);
  // const user = localStorage.getItem("token");
  return (
    <div className={darkMode ? "app dark" : "app"}>
      
      <BrowserRouter>
      <ToastContainer/>
    <Routes>
    {/* {user &&  */}
      <Route path="/">
        <Route index element={<Home />} />
        {/* <Route path='/signup' element={<Signup/>}/>
        <Route path="/login" element={<Login />} /> */}
        <Route path="users">
          <Route index element={<List />}/>
          <Route path="/users/:id" element={<Single />} /> 
        </Route>
        <Route path="products">
          <Route index element={<Lists />}/>
          {/* <Route path=":productId" element={<Singles />} /> */}
          <Route path="/products/new" element={<New  title="Add new product"/>} />
        </Route>
        <Route path="orders" element={<Order />} />
      </Route>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;