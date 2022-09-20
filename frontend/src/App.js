import React from "react";

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CarsList from "./pages/CarsList";
import VendorLogin from "./pages/vendor/Login";
import Dashboard from "./pages/vendor/Dashboard";
import Register from './pages/vendor/Register'
import AddProduct from './pages/vendor/AddProduct'

import Usage from "./pages/Usage";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/carslist" exact element={<CarsList />} />
          <Route path="/usage" exact element={<Usage />} />

        </Routes>
        <Routes>
          <Route path="/vendor-register" exact element={<Register />} />
          <Route path="/vendor-register" exact element={<Register />} />
          <Route path="/vendor-login" exact element={<VendorLogin />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/add-car" exact element={<AddProduct />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />

    </div>
  );
}

export default App;
