import Book from "./Book";
import { books } from "./data";

const BookList = () => {
  const getBook = (id) => {
    let book = books.find((book) => book.id === id);
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, idx) => {
          return <Book {...book} key={idx} getBook={getBook} id={idx} />;
        })}
      </section>
    </>
  );
};

export default BookList;
