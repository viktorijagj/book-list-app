
import "./Header.css"
import bookImg from '../img/bookStore.png'

function Header() {
  return (
    <header className='main-header'>
      <div className='main-header-logo'>
        <img src={bookImg} alt="Book logo" width={100} height={50}></img>
        <h1 className='main-header-haeding'>BookStore</h1>
      </div>
        <nav>
         <a className='all-books-btn' href="/">Show all Books</a>
         </nav>
    </header>
  )
}

export default Header