import SignUp from './SignUp'
import LogIn from './LogIn'
import EachBook from './EachBook'
import { getAllBooks } from '../apis/BookApis'
import { useEffect, useState } from "react"

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
        {/* <SignUp />
        <LogIn /> */}

        {/* <div>Current book</div>
        <div>New book</div> */}

        <div>All books</div>
        {books.map((book, index) => <EachBook book={book} key={index} />)}
    </>

    )
}