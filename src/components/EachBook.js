

export default function EachBook(props) {
    
    const book = props;
    
    return(
        <>
        <div className="eachBook">
            <div>{book.book.title}</div>
            <div>By {book.book.author}</div>
            <br></br>
            <div>Genre: {book.book.genre}</div>
            <div>Date published: {book.book.publishedOn}</div>
            <div>Genre: {book.book.genre}</div>
        </div>

        </>
    )
}