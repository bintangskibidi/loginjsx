// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import Barang from "./pages/Barang"; 
import Detail from "./pages/detail"; 
import Edit from "./pages/Edit"; 
import Tambah from "./pages/Tambah"; 
// import Navbar from "./Components/Navbar"
 import Hero from "./Components/Hero";
import './index.css';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/barang" element={<Barang />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/tambah" element={<Tambah />} />
      <Route path="/lending" element={<Hero />} />
    </Routes>
  );
};

export default App;