
import { getAllBooks } from '../apis/BookApis'
import { deleteUser, getUser } from '../apis/UserApis'
import { useEffect, useState } from "react"
import "../App.css"
import EachBookDetails from './EachBookDetails'
import NewBook from './NewBook'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";

export default function Home({isUserLoggedIn}) {

    const navigate = useNavigate()

    const [books, setBooks] = useState([])
    const [currentUserName, setCurrentUserName] = useState({})

//  Get all books via Book APIs and save to above state variable.
useEffect(() => {
    getAllBooks()
    .then(books => books.json())
    .then(data => {
        setBooks(data)
        // console.log(data)
    })
    .catch((error) => error.message)

    if (localStorage.getItem("currentUserId")){
        findUserName()
    }
}, [])

// Get current user details and set data into currentUserName state.
const findUserName = () => {
    // console.log(localStorage.getItem("currentUserId"))
    getUser(parseInt(localStorage.getItem("currentUserId")))
    // .then(response => console.log(response))
    .then(response => setCurrentUserName(response))

}

// Check through books array for each date, looking for the largest date
const findCurrentBook = books.reduce((a, b) => {
    return new Date(a.meeting_date) > new Date(b.meeting_date) ? a : b
}, {})

// console.log(findCurrentBook)
// console.log(currentUserName.firstname)

const deleteAccount = () => {
   
    deleteUser(parseInt(localStorage.getItem("currentUserId")))
    localStorage.removeItem("token")
    localStorage.removeItem("currentUserId")
    navigate('/')
}

return(
    <>
{!isUserLoggedIn ? 
    <h1>Hello Readers</h1>
    :
    <h1>Hello again {currentUserName.username}</h1>
}

{localStorage.getItem("token") ?
    <button onClick={deleteAccount} 
            type="button" class="btn btn-outline-dark btn-sm">
                Delete account</button>
    : null
}

<div>


</div>

{/* If user is logged in, show new book button */}
{isUserLoggedIn ? 
    <div className='AddBook'>
        <NewBook />
    </div>
: null }
    
        {/* <div>Current book</div>
        <div>New book</div> */}
<div class="border border-5 border-success bg-danger-subtle p-4 m-4">
    <h2>Current book</h2>
    <h3>{findCurrentBook.title}</h3>
    <p>{findCurrentBook.author}</p>
    <br></br>
    <p><strong>Meeting: </strong>{findCurrentBook.meeting_date}</p>
    <p><strong>Location: </strong>{findCurrentBook.meeting_location}</p>
    {isUserLoggedIn ? 
    <div><Link to={`/books/${findCurrentBook.id}`}>More</Link></div>
    : null}
</div>

<div class="border border-5 border-success bg-danger-subtle p-4 m-4">
    <h3>My details</h3>
    <div><strong>Username: </strong>{currentUserName.username}</div>
    <div><strong>First name: </strong>{currentUserName.firstname}</div>
    <div><strong>Last name: </strong>{currentUserName.firstname}</div>
    <div><strong>Email: </strong>{currentUserName.email}</div>
</div>

    <div class="container"> 
        <h2>All books</h2>
        <div class="row row-gap-4">
            {/* Map over all outputs from above call. */}
            {books.map((book, index) => <div class="col-md-4"><EachBookDetails 
                    book={book} key={book.id} index={index}
                    isUserLoggedIn={isUserLoggedIn} /></div>)}
         </div>
    </div>
    </>

    )
}