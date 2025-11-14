import React from "react";

function Book({ book, index, deleteBook }) {
  return (
    <li className="book-item">
      <div>
        <h3>Title</h3> {book.title}
      </div>
      <div>
        <h3>Author</h3> {book.author}
      </div>
      <div>
        <h3>Genre</h3> {book.genre}
      </div>
      <div>
        <h3>Edition</h3> {book.edition}
      </div>
      <div>
        <h3>Pages</h3> {book.pages}
      </div>
      <div>
        <h3>Language</h3> {book.language}
      </div>
      <div>
        <h3>Rating</h3> {book.rating}
      </div>
      <button onClick={() => deleteBook(index)}>Delete</button>
    </li>
  );
}

export default Book;
