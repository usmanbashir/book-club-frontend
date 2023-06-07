import { useEffect, useState } from "react"
import { getOneBook, editOneBook, deleteBook } from "../apis/BookApis"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { getReviews } from "../apis/ReviewApis"
import EachReview from "./EachReview"
import EditBookForm from "./EditBookForm"
import NewReviewForm from "./NewReviewForm"

export default function BookPage(props) {
const isUserLoggedIn = props;

const [ singleBook, setSingleBook ] = useState({})
const [ editedBook, setEditedBook ] = useState({})

const [ reviewList, setReviewList ] = useState([])

const [ showForm, setShowForm ] = useState(false)

// Get book id from url param.
const { id } = useParams()
// console.log(id)
const navigate = useNavigate()

const getBook = () => {
    // Call book id to get individual book details using book id. 
    getOneBook(id)
    .then((book) => book.json())
    .then((data) => {
        // Set above state to hold book details. 
        setSingleBook(data)
        setEditedBook(data)
        // console.log(data)
    })
}

// Get reviews for this book.
const bookReviews = () => {
    // console.log(id)
    getReviews(id)
    .then(review => {
        let reviewData = JSON.parse(review)
        setReviewList(reviewData)
        // console.log(reviewData)
    })
     .catch((error) => console.log(error))

}

// Run these functions on page load and everytime the id parameter changes.
useEffect(() => { 
    getBook(id) 
    bookReviews(id)
}, [id])

// Call the delete book API with the current id as a param. 
const deleteOneBook = () => {
    deleteBook(id)
    navigate("/home")
}

const editFormBtn = () => {
    setShowForm(!showForm)
}

if (!reviewList.length) return "Log in or sign up to see this page!"

    return (
        <>

        <h1>{singleBook.title}</h1>
        <div>Written by: {singleBook.author}</div>
        <div>Genre: {singleBook.genre}</div>
        <div>Published: {singleBook.publishedOn}</div>
        <br></br>
        <br></br>
        <h3>Meeting details</h3>
        <div>Date: {singleBook.meeting_date}</div>
        <div>Location: {singleBook.meeting_location}</div>

        <br></br>

        <button onClick={deleteOneBook}>Delete</button>

        <br></br>

         <button onClick={editFormBtn}>Edit</button>

         {showForm ? <EditBookForm 
         singleBook={singleBook}
         setSingleBook={setSingleBook}
         editedBook={editedBook}
         setEditedBook={setEditedBook}
         id={id} />
            : null}
        
        <br></br>
        <br></br>

        <h2>Reviews</h2>
        <NewReviewForm />

        {reviewList.length > 0 ? 
            reviewList.map((review) => 
            <EachReview  review={review} key={review.id} /> 
            ) : null
         }

        </>
    )
}
