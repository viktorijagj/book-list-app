import Books from "../listofbooks.json" 
import { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Footer from './Footer';
import Header from './Header';

function Home() {
    const [books, setBooks] = useState(Books);

    // Sorting books
  useEffect(() => {
    const currentBooks = [...books];
    const sortedBooks = currentBooks.sort((a, b) =>
      a.author > b.author ? 1 : -1
    );
    setBooks(sortedBooks);
  }, []);

  return (
   <div>
    <Header/>
    <main>
    <SearchBar placeholder="Enter the book..." books={books} setBooks={setBooks} Books={Books}/>
    </main>
    <Footer/>
   </div>
  );
}

export default Home;
