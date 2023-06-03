import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Vip from './components/Vip';

function App() {
  return (
    <div>
      <h1>Hello readers</h1>

      <div className='NavBar'>
           <NavBar />  </div>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/vip" element={<Vip />} />
      </Routes>

    </div>
  );
}

export default App;
