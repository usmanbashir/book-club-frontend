import './App.css';
import { useState, useEffect } from 'react'; 
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import BookPage from './components/BookPage';
import NewBook from './components/NewBook';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [currentUserId, setCurrentUserId] = useState("")

  function isLoggedIn(){
      const getToken = localStorage.getItem("token")
      // If there is a token held in local storage, 
      // setIsUserLoggedIn to true.
      if (getToken){
          setIsUserLoggedIn(true)
          // console.log("YES")
      }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])



return (
  <div>

      <div>
           <NavBar isUserLoggedIn={isUserLoggedIn}
           setIsUserLoggedIn={setIsUserLoggedIn} />  
      </div>

      <div>
          <Routes>
            <Route path="/" element={<Home 
                isUserLoggedIn={isUserLoggedIn} currentUserId={currentUserId} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                setCurrentUserId={setCurrentUserId}
                currentUserId={currentUserId} />} />
            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/newbook" element={<NewBook />} />
          </Routes>
      </div>
  </div>
  );
}

export default App;
