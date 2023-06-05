import { useEffect, useState } from "react"
import { getOneBook } from "../apis/BookApis"
import { useParams, useNavigate } from "react-router-dom"
import { getReviews } from "../apis/ReviewApis"

export default function BookPage() {

const [ singleBook, setSingleBook ] = useState({})
const [ reviewList, setReviewList ] = useState([])

// Get book id from url param.
const { id } = useParams()
// console.log(id)

const getBook = () => {
    // Call book id to get individual book details using book id. 
    getOneBook(id)
    .then((book) => book.json())
    .then((data) => {
        // Set above state to hold book details. 
        setSingleBook(data)
        // console.log(data)
    })
}

const bookReviews = () => {
    console.log(id)
    getReviews(id)
    .then(review => {
        setReviewList(review)
        console.log("FIRST CLOG ** " + review)
        console.log("SECOND CLOG ***  " + reviewList)})
     .catch((error) => console.log(error))
}


useEffect(() => { 
    getBook(id) 
    bookReviews(id)
}, [])

    return (
        <>
        <h1>{singleBook.title}</h1>
        <div>Written by: {singleBook.author}</div>
        <div>Genre: {singleBook.genre}</div>
        <div>Published: {singleBook.publishedOn}</div>
        <br></br>
        <br></br>
        <h2>Meeting details</h2>
        <div>Date: {singleBook.meeting_date}</div>
        <div>Location: {singleBook.meeting_location}</div>


        </>
    )
}