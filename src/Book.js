import React from "react";

const Book = (props) => {
  const { img, title, author, id, getBook } = props;
  return (
    <article className="book">
      <Image src={img} />
      <Title title={title} />
      {/* <button onClick={() => getBook(id)}>Click me</button> */}
      <Author author={author} />
      <span className="number">{`#${id + 1}`} </span>
    </article>
  );
};

const Image = ({ src }) => {
  return <img src={src} alt="book" />;
};
const Title = ({ title }) => {
  return <h2>{title} </h2>;
};
const Author = ({ author }) => {
  return <h4>{author} </h4>;
};

export default Book;
