
import EachBook from './EachBook'
import { getAllBooks } from '../apis/BookApis'
import { useEffect, useState } from "react"
import "../App.css"

export default function Home() {

const [books, setBooks] = useState([])

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
        {books.map((book, index) => <EachBook book={book} key={index} />)}
    </div>

    </>

    )
}