

export default function EachBook(props) {
    
    const book = props;
    
    return(
        <>
        <div>Title: {book.book.title}</div>
        <div>Author: {book.book.author}</div>
        <div>Genre: {book.book.genre}</div>
        <div>Date published: {book.book.publishedOn}</div>
        <div>Genre: {book.book.genre}</div>
        </>
    )
}