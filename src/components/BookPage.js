import { useEffect, useState } from "react"
import { getOneBook, editOneBook } from "../apis/BookApis"
import { useParams, useNavigate } from "react-router-dom"
import { getReviews } from "../apis/ReviewApis"
import EachReview from "./EachReview"

export default function BookPage() {

const [ singleBook, setSingleBook ] = useState({})
const [ editedBook, setEditedBook ] = useState(singleBook)

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
        // console.log("FIRST CLOG ** " + review)
        // console.log("SECOND CLOG ***  " + reviewList)        
    })
     .catch((error) => console.log(error))
// console.log("THIRD CLOG ****  " + reviewList)
}

useEffect(() => { 
    getBook(id) 
    bookReviews(id)

}, [])

function handleInput(e){
    setEditedBook({...editedBook, [e.target.name]: e.target.value})
    console.log(e.target.value)
}

function submitEditBook(e) {
    e.preventDefault()
    // Send edited details over to patch API call
    // as well as current book id.
    editOneBook(editedBook, id)
    // console.log(editedBook, id)

    
}


//    console.log("    POST USE EFFECT ^^^^^^^     " + reviewList) 

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

        {/* {reviewList && 
            reviewList.map((review) => 
            <EachReview  review={review} /> 
            )
         } */}

        <br></br>
        <h3>Delete book</h3>
        <button>Delete book</button>
        <br></br>
<form>
            <div>
            <h3>Edit book</h3>
            <label>title</label>
            <input
                name="title"
                value={editedBook.title}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>author</label>
            <input
                name="author"
                value={editedBook.author}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Genre</label>
            <input
                name="genre"
                value={editedBook.genre}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Published:</label>
            <input
                type="date"
                name="publishedOn"
                value={editedBook.publishedOn}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Meeting date</label>
            <input
                type="date"
                name="meeting_date"
                value={editedBook.meeting_date}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Meeting Location</label>
            <input
                name="meeting_location"
                value={editedBook.meeting_location}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <button onClick={(e) => {
                submitEditBook(e)
            }}>Update book</button>
        </form> 
        </>
    )
}
