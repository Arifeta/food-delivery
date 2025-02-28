import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />   {/* ✅ Correct */}
          <Route path="/list" element={<List />} /> {/* ✅ Correct */}
          <Route path="/orders" element={<Order />} /> {/* ✅ Correct */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
