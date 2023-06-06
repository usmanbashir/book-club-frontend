import { useEffect, useState } from "react"
import { getOneBook, editOneBook, deleteBook } from "../apis/BookApis"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { getReviews } from "../apis/ReviewApis"
import EachReview from "./EachReview"
import EditBookForm from "./EditBookForm"

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

const bookReviews = () => {
    console.log(id)
    getReviews(id)
    .then(review => {
        setReviewList(review)
        // console.log("FIRST CLOG ** ", review)
        // console.log("SECOND CLOG ***  ", reviewList)        
    })
     .catch((error) => console.log(error))

// console.log("THIRD CLOG ****  ", reviewList)
}

useEffect(() => { 
    getBook(id) 
    bookReviews(id)
    console.log("*****HOW MANY TIMES ******")
}, [id])


const deleteOneBook = () => {
    deleteBook(id)
    navigate("/home")
}

const editFormBtn = () => {
    setShowForm(!showForm)
}

if (!reviewList.length) return "Theree's no data"


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
    
    {/* {console.log(reviewList)} */}

        {/* {reviewList.length > 0 ? 
            reviewList.map((review) => 
            <EachReview  review={review} key={review.id} /> 
            ) : null
         } */}



        <br></br>

        <h3>Delete book</h3>
        <button onClick={deleteOneBook}>Delete</button>

        <br></br>

         <button onClick={editFormBtn}>Edit</button>

         {showForm ? <EditBookForm 
         singleBook={singleBook}
         editedBook={editedBook}
         setEditedBook={setEditedBook}
         id={id} />
            : null}

        </>
    )
}
