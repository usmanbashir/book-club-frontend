import './App.css';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <div>

      <div class="navbar navbar-expand-lg bg-body-tertiary bg-danger-subtle ">
           <NavBar isUserLoggedIn={isUserLoggedIn}
           setIsUserLoggedIn={setIsUserLoggedIn} />  </div>

      <Routes>
        <Route path="/" element={<Home isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn}
            setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Route path="/books/:id" element={<BookPage />} />
      </Routes>

    </div>
  );
}

export default App;
