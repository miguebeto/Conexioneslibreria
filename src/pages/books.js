import Book from "../cards/Book";
import "../styles/books.css";

const Books = ({ books }) => {

  return (
    <div className="container">
      <h1>Books</h1>
      <section className="row">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            img={book.img}
            title={book.title}
            author={book.author}
            // description={book.description}
            price={book.price}
          />
        ))}
      </section>
    </div>
  );
};

export default Books;
