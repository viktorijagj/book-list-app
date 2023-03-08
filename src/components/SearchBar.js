import "./SearchBar.css"
import { useState } from "react";
import NotFound from "./NotFound";
import Book from "./Book";
import { FaSearch } from "react-icons/fa";

function SearchBar({ books, setBooks, Books, placeholder }) {
  
  const [query, setQuery] = useState("");

   //Handle Change
   const handleChange = (e) => {
    setQuery(e.target.value)
   }
  // Filtering books
  const handleSearch = () => {
    if (query === "" || query === null) {
      setBooks(Books.sort((a, b) => (a.author > b.author ? 1 : -1)));
      return;
    }
    const valuesToSearchFor = ["author", "title", "genre"];
    const filteredBooks = books.filter((book) => {
      return valuesToSearchFor.some((value) => {
        const bookValue = book[value].toLowerCase();
        return bookValue.includes(query.toLowerCase());
      });
    });
    setBooks(filteredBooks);
  };

  return (
    <section className="search-section">
      <div className="search-wrapper">
      <input
      className="search-input"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      <button className="search-btn" onClick={() => handleSearch()}>Search <FaSearch className="search-btn-icon"/></button>
      </div>
      <ul className="book-wrapper">
        {!books.length ? <><NotFound/></>  :
          books.map((book) => {
            return (
              <Book
                key={book.title}
                title={book.title}
                author={book.author}
                genre={book.genre}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default SearchBar;
