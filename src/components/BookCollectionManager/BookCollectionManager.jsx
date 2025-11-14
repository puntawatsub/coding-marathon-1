import React, { useState } from "react";
import Book from "./Book"; // import the Book component
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    language: "",
    edition: "",
    pages: "",
    rating: "",
  });

  // Handle input change
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Add a new book to the list
  function addBook() {
    if (newBook.title.trim() !== "" && newBook.author.trim() !== "") {
      setBooks((b) => [...b, newBook]);
      setNewBook({
        title: "",
        author: "",
        genre: "",
        language: "",
        edition: "",
        pages: "",
        rating: "",
      });
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    setBooks(books.filter((_, i) => i !== index));
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div className="input-section">
        <input
          type="text"
          name="title"
          placeholder="Enter book title..."
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author name..."
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Enter genre..."
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="edition"
          placeholder="Enter edition..."
          value={newBook.edition}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pages"
          placeholder="Enter pages..."
          value={newBook.pages}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="language"
          placeholder="Enter language..."
          value={newBook.language}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Enter rating..."
          value={newBook.rating}
          onChange={handleInputChange}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      <ol>
        {books.map((book, index) => (
          <Book
            key={index}
            index={index}
            book={book}
            deleteBook={deleteBook} // pass delete handler to Book
          />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
