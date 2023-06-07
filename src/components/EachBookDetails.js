import { Link } from "react-router-dom";


export default function EachBookDetails(props) {
    
    const {book, isUserLoggedIn} = props;
    // console.log(book.id)

    return(
        // <div>
            <div class="border border-5 border-success 
            bg-danger-subtle p-4">
                <div class="fw-bold">{book.title}</div>
                <div>By {book.author}</div>
                <br></br>
                <div>Genre: {book.genre}</div>
                <div>Date published: {book.publishedOn}</div>
                <br></br>
            {localStorage.getItem("token") ?    
                <Link to={`/books/${book.id}`}>Show me more!</Link>
                : null } 
            </div>
        // </div>
    )
}