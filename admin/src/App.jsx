import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const url = "https://food-delivery-2-nrsc.onrender.com";
  

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />   {/* ✅ Correct */}
          <Route path="/list" element={<List url={url}/>} /> {/* ✅ Correct */}
          <Route path="/orders" element={<Order url={url}/>} /> {/* ✅ Correct */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
