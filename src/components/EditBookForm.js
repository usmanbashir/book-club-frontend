import { editOneBook } from "../apis/BookApis"

export default function EditBookForm(props) {

    const {editedBook, setEditedBook, setSingleBook, id} = props;

    const handleInput = (e) => {
        setEditedBook({...editedBook, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    
    const submitEditBook = (e) => {
        e.preventDefault()
        // Send edited details over to patch API call
        // as well as current book id. Update book with new info.
        editOneBook(editedBook, id)
        // console.log(editedBook, id)
        // Update singleBook based on the newly updated book.
        setSingleBook(editedBook)
         
    }
return(

    <form>
            <div>
            <h3>Edit book</h3>
            <label>title</label>
            <input
                name="title"
                value={editedBook.title}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>author</label>
            <input
                name="author"
                value={editedBook.author}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Genre</label>
            <input
                name="genre"
                value={editedBook.genre}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Published:</label>
            <input
                type="date"
                name="publishedOn"
                value={editedBook.publishedOn}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Meeting date</label>
            <input
                type="date"
                name="meeting_date"
                value={editedBook.meeting_date}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <div>
            <label>Meeting Location</label>
            <input
                name="meeting_location"
                value={editedBook.meeting_location}
                onChange={handleInput}
                autoComplete="off"
            />
            </div>

            <button onClick={(e) => {
                submitEditBook(e)
            }}>Update book</button>
        </form> 

)
}