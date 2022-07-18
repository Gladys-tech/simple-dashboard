
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Singles from "./pages/singles/Singles";
import Lists from "./pages/lists/Lists";


function App() {

  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />}/>
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
        </Route>
        <Route path="products">
          <Route index element={<Lists />}/>
          <Route path=":productId" element={<Singles />} />
          <Route path="new" element={<New inputs={productInputs}  title="Add new product"/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
