
import { getAllBooks } from '../apis/BookApis'
import { getUser } from '../apis/UserApis'
import { useEffect, useState } from "react"
import "../App.css"
import EachBookDetails from './EachBookDetails'
import NewBook from './NewBook'

export default function Home(props) {

    const isUserLoggedIn = props;

    const [books, setBooks] = useState([])

//  Get all books via Book APIs and save to above state variable.
useEffect(() => {
    getAllBooks()
    .then(books => books.json())
    .then(data => {
        setBooks(data)
        console.log(data)})
    .catch((error) => error.message)

}, [])


return(
    <>

{!isUserLoggedIn ? 
    <h1>Hello readers</h1>
    :
    <h1>Hello {getUser}</h1>
}



    <NewBook />
    
        {/* <div>Current book</div>
        <div>New book</div> */}
    <div className='Lorem'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div> 
        <h2>All books</h2>
        {/* Map over all outputs from above call. */}
        {books.map((book, index) => <EachBookDetails 
                book={book} key={book.id} index={index}
                isUserLoggedIn={isUserLoggedIn} />)}
    </div>

    </>

    )
}