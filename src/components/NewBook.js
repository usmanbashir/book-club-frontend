import { useState } from "react";
import { createOneBook } from "../apis/BookApis";
import { useNavigate } from "react-router";

export default function NewBook({isUserLoggedIn}) {
    // debugger;
    const navigate = useNavigate()

    const [ addBookForm, setAddBookForm ] = useState(false)

    const [ newBook, setNewBook ] = useState({
        title: "",
        author: "",
        genre: "",
        publishedOn: "",
        meeting_date: "",
        meeting_location: "",
        // user_id: localStorage.getItem("currentUserId")
    })

    function handleInput(e) {
        setNewBook({...newBook, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    function submitNewBook(e){
        
        e.preventDefault()
        createOneBook(newBook)

        setNewBook({
            title: "",
            author: "",
            genre: "",
            publishedOn: "",
            meeting_date: "",
            meeting_location: "",
            // user_id: localStorage.getItem("currentUserId")
        })
        setAddBookForm(false)
        navigate('/')
    }

    return (
    <>
        <form>
            <h1>Add our next book</h1>
            
            <br></br>

            <h3>Book details</h3>
            <div>
            <label>Title</label>
            <input
                name="title"
                value={newBook.title}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Author</label>
            <input
                name="author"
                value={newBook.author}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Genre</label>
            <input
                name="genre"
                value={newBook.genre}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Published:</label>
            <input
                type="date"
                name="publishedOn"
                value={newBook.publishedOn}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <h3>Meeting details</h3>

            <br></br>

            <div>
            <label>Meeting date</label>
            <input
                type="date"
                name="meeting_date"
                value={newBook.meeting_date}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Meeting Location</label>
            <input
                name="meeting_location"
                value={newBook.meeting_location}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <button onClick={(e) => {
                submitNewBook(e)
            }}>Create book </button>
        </form>
    </>

    )
}