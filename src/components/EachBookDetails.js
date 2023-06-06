import { Link } from "react-router-dom";


export default function EachBookDetails(props) {
    
    const book = props;
    // console.log(book.book.id)

    return(
        <>
        {/* Show some book details and
            link to the individual book page.
        */}
        
            <div className="eachBook">
                <div>{book.book.title}</div>
                <div>By {book.book.author}</div>
                <br></br>
                <div>Genre: {book.book.genre}</div>
                <div>Date published: {book.book.publishedOn}</div>
                <br></br>
                <Link to={`/books/${book.book.id}`}>Show me more!</Link>
            </div>
        </>
    )
}