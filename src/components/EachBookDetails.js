import { Link } from "react-router-dom";


export default function EachBookDetails(props) {
    
    const {book, isUserLoggedIn} = props;
    // console.log(book.id)

    return(
        <>
        
            <div className="eachBook">
                <div>{book.title}</div>
                <div>By {book.author}</div>
                <br></br>
                <div>Genre: {book.genre}</div>
                <div>Date published: {book.publishedOn}</div>
                <br></br>
            {isUserLoggedIn ?    
                <Link to={`/books/${book.id}`}>Show me more!</Link>
                : null } 
            </div>
        </>
    )
}