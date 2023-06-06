import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import BookPage from './components/BookPage';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  function isLoggedIn(){
      const getToken = localStorage.getItem("token")
      // console.log(getToken)
      // If there is a token held in local storage, 
      // setIsUserLoggedIn to true.
      if (getToken){
          setIsUserLoggedIn(true)
      }
  }

  return (
    <div>

      <div className='NavBar'>
           <NavBar />  </div>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/books/:id" element={<BookPage />} />
      </Routes>

    </div>
  );
}

export default App;
