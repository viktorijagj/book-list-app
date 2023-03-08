import "./Book.css"

function Book({title , author, genre}) {
  return (
   <div className='book'>
    <h1 className='book-title'>{title}</h1>
    <h3 className='book-author'><span className='book-span-descr'>Book author:</span> {author}</h3>
    <h4 className='book-genre'><span className='book-span-descr'>Book genre: </span>{genre}</h4>
   </div>
  )
}

export default Book