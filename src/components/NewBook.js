import { useState } from "react";
import { createOneBook } from "../apis/BookApis";
import { useNavigate } from "react-router";

export default function NewBook() {
    // debugger;
    const navigate = useNavigate()

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
        navigate()
    }

    return (
    <>
        <h3>New book</h3>

        <form>
            <div>
            <label>title</label>
            <input
                name="title"
                value={newBook.title}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>author</label>
            <input
                name="author"
                value={newBook.author}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Genre</label>
            <input
                name="genre"
                value={newBook.genre}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Published:</label>
            <input
                type="date"
                name="publishedOn"
                value={newBook.publishedOn}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Meeting date</label>
            <input
                type="date"
                name="meeting_date"
                value={newBook.meeting_date}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <div>
            <label>Meeting Location</label>
            <input
                name="meeting_location"
                value={newBook.meeting_location}
                onChange={handleInput}
                authoComplete="off"
            />
            </div>

            <button onClick={(e) => {
                submitNewBook(e)
            }}>Create book </button>
        </form>
    </>

    )
}