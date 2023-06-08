import { Link } from "react-router-dom";


export default function EachBookDetails({book, isUserLoggedIn}) {

    return(
        // <div>
            <div className="eachBookDetails">
                <div>{book.title}</div>
                <br></br>
                <div>By {book.author}</div>

                <br></br>
                {/* <br></br> */}

                {isUserLoggedIn ? 
                    <Link to={`/books/${book.id}`} 
                    className='linkBtn'>
                        Show me more!</Link>
                : null}  

            </div>
        // </div>
    )
}