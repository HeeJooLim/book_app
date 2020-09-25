import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Book from "./components/Book";

function App() {
  const authKey =
    "BAFFE0F20C16E8212EED004AF1F838B029C0047BAF2FEF4FB9061AA86FF297F5";
  const output = "json";
  const categoryId = "100";

  const [isLoading, setIsLoading] = useState(true);
  const [books, setBook] = useState([]);

  const getBooks = async() => {
    const _books = await axios.get("/api/bestSeller.api", {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: { key: authKey, categoryId: categoryId, output: output },
    });

    console.log(_books);
    setBook(_books.data.item);
    setIsLoading(false);
  }

  useEffect(() => {
    getBooks();
  }, []);


  return (
    <div className="container">
      <div>
        {books.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            categoryId={book.categoryId}
            categoryName={book.categoryName}
            title={book.title}
            author={book.author}
            description= {book.description}
            coverUrl={book.coverLargeUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
