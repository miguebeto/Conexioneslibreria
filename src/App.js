import "./App.css";
import Header from "./components/Header";
import Nav from "./pages/nav";
import Books from "./pages/books";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import { getAllBooks } from "./components/AllBooks";
import About from "./components/About";
import { useState, useEffect } from "react";
import Book from "./cards/Book";
import Details from "./cards/Details";
import Footer from "./pages/footer";

const App = () => {
  //states
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching data
  useEffect(() => {
    setLoading(true);
    getAllBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  function onSearch(bookTitle) {
    let book = books.filter(
      (b) =>
        b.title.toLowerCase().includes(bookTitle.toLowerCase()) ||
        b.author.toLowerCase().includes(bookTitle.toLowerCase())
    );
    if (book.length > 0) {
      setBooks(book);
    } else {
      alert("Libro no encontrado");
    }
  }

  function onFilter(bookId) {
    let book = books.filter((c) => c.id === parseInt(bookId));
    console.log(book[0]);
    if (book.length > 0) {
      return book[0];
    } else {
      return null;
    }
  }

  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route
        exact
        path="/book/:bookId"
        render={({ match }) => <Details book={onFilter(match.params.bookId)} />}
      />
      <Route path="/">
        <div className="w-100 h-100">
          <Nav onSearch={onSearch}/>
          <Header onSearch={onSearch}/>
        </div>
        <div className="container-fluid">
          {loading ? <h3>Loading...</h3> : <Books books={books} />}
        </div>
        <Footer/>
      </Route>
    </Switch>
  );
};

export default App;
