import { editOneBook } from "../apis/BookApis"

export default function EditBookForm(props) {

    const {editedBook, setEditedBook, setSingleBook, showForm, setShowForm, id} = props;

    const handleInput = (e) => {
        setEditedBook({...editedBook, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    
    const submitEditBook = (e) => {
        e.preventDefault()
        // Send edited details over to patch API call
        // as well as current book id. Update book with new info.
        editOneBook(editedBook, id)
        // Update singleBook based on the newly updated book.
        setSingleBook(editedBook)
        setShowForm(!showForm) 
    }
return(
<div className="signupForm" id="editForm">
    <h3>Edit book</h3>

    <form className="editBox">

            <div className="fields">   
                <label className="field">Title</label>
                <input
                    className="input-field"
                    name="title"
                    value={editedBook.title}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div className="fields">
                <label className="field">Author</label>
                <input
                    className="input-field"
                    name="author"
                    value={editedBook.author}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div className="fields">
                <label className="field">Genre</label>
                <input
                    className="input-field"
                    name="genre"
                    value={editedBook.genre}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div className="fields">
                <label className="field">Published:</label>
                <input
                    className="input-field"
                    type="date"
                    name="publishedOn"
                    value={editedBook.publishedOn}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div className="fields">
                <label className="field">Meeting Location</label>
                <input
                    className="input-field"
                    name="meeting_location"
                    value={editedBook.meeting_location}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div className="fields">
                <label className="field">Meeting Date</label>
                <input
                    className="input-field"
                    type="date"
                    name="meeting_date"
                    value={editedBook.meeting_date}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <button onClick={(e) => {
                submitEditBook(e)
            }} className="btnTwo">Update book</button>
        </form> 
</div>
)
}