import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';
import Book from "./Book";
import HomeCarousel from "./HomeCarousel";
import {CardGroup, Card} from "react-bootstrap";


function Home() {
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
    <div className="container py-5">
      <header className="jumbotron my-4">
      <h1 className="display-3">HAPPY BOOK DAY (●'◡'●)</h1>
      <br/>
      <p className="lead">베스트셀러와 독서 검색을 통해 다양하고 재미있는 책을 만나보세요!</p>
      <p>* 이 사이트는 '인터파크'에서 제공하는 데이터를 기준으로 정보가 제공됩니다.</p>
    </header>
      <hr/>
      
      <div className="my-4">
      <p className="font-weight-light text-center" style={{fontSize : "40px"}}># Best Seller <span role="img" aria-label="trophy" style={{fontSize: "xx-large"}}>🏆</span></p>
      </div>
      <div>
      <CardGroup>
        {books.map((book, index) => (
          <Book
            index ={index}
            key={book.itemId}
            book={book}
            // index ={index}
            // key={book.itemId}
            // itemId={book.itemId}
            // categoryId={book.categoryId}
            // categoryName={book.categoryName}
            // title={book.title}
            // author={book.author}
            // description= {book.description}
            // coverUrl={book.coverLargeUrl}
            // copyright={book.copyright}
            // priceStandard ={book.priceStandard}
          />
        ))}
        </CardGroup>
      </div>
    </div>
  );
}

export default Home;
