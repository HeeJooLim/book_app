import React, { useState,useEffect } from "react";
import axios from "axios";
import BookList from "./BookList";

const BookSearch = () => {
  
  const [books, setBooks] = useState([]);
  const [categorys, setCategorys] = useState([
      {categoryId : 100, categoryName : "국내도서" },
      {categoryId : 101, categoryName : "소설" },
      {categoryId : 102, categoryName : "시/에세이" },
      {categoryId : 103, categoryName : "예술/대중문화" },
      {categoryId : 104, categoryName : "사회과학" },
      {categoryId : 105, categoryName : "역사와 문화" },
      {categoryId : 107, categoryName : "잡지" },
      {categoryId : 108, categoryName : "만화" },
      {categoryId : 109, categoryName : "유아" },
      {categoryId : 110, categoryName : "아동" },
      {categoryId : 111, categoryName : "가정과 생활" },
      {categoryId : 112, categoryName : "청소년" },
      {categoryId : 113, categoryName : "초등학습서" },
      {categoryId : 114, categoryName : "고등학습서" },
      {categoryId : 115, categoryName : "국어/외국어/사전" },
      {categoryId : 116, categoryName : "자연과 과학" },
      {categoryId : 117, categoryName : "경제경영" },
      {categoryId : 118, categoryName : "자기계발" },
      {categoryId : 119, categoryName : "인문" },
      {categoryId : 120, categoryName : "종교/역학" },
      {categoryId : 122, categoryName : "컴퓨터/인터넷" },
      {categoryId : 123, categoryName : "자격서/수험서" },
      {categoryId : 124, categoryName : "취미/레저" },
      {categoryId : 125, categoryName : "전공도서/대학교재" },
      {categoryId : 126, categoryName : "건강/뷰티" },
      {categoryId : 128, categoryName : "여행" },
      {categoryId : 129, categoryName : "중등학습서" },
  ])
  
  
 const output = "json";
 const authKey = "BAFFE0F20C16E8212EED004AF1F838B029C0047BAF2FEF4FB9061AA86FF297F5";

// 카테고리 선택

 const [searchCategory, setSearchCategory] = useState({
  categoryId : '',
 })
 const searchByCategory = (e) => {
  setSearchCategory({...setSearchCategory, categoryId : e.target.dataset.id});
}

useEffect(() => {
searchBooksByCategory();
}, [searchCategory])



const searchBooksByCategory = async() => {
  const _books = await axios.get("/api/recommend.api", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: { key: authKey, categoryId: searchCategory.categoryId, output: output },
  });

  console.log(_books);
  setBooks(_books.data.item);
}

// 책 검색

const [bookName, setBookName] = useState('');
const [paginator, setPaginator] = useState({
  startIndex : '',
  maxResults : ''
})

const onChange = (e)=>{
  setBookName(e.target.value);
}

 const searchBooks = async() => {
  const _books = await axios.get("/api/search.api", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: { key: authKey, query : bookName, output: output, start : 1 },
  });
  // setPaginator({
  //   startIndex : _books.data.startIndex,
  //   maxResults : _books.data.maxResults
  // });
  console.log(_books.data);
  setBooks(_books.data.item);
}

  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <h1>찾고싶은 책을 검색해보세요!</h1>
        <div className="mb-3">
          <label htmlFor="validationTextarea"></label>
          <div className="row">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="책 이름을 입력하세요" aria-label="책 이름을 입력하세요" aria-describedby="button-addon2" name="bookName" onChange={onChange} value={bookName}></input>              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={searchBooks}>검색</button>
              </div>
            </div>
            <div>
            {categorys.map((category, index) => (
              <span className="badge badge-light m-1" data-id={category.categoryId} onClick={searchByCategory} key={category.categoryId}>{category.categoryName}</span>
              ))}
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="m-3 mb-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{width: "10%"}}>번호</th>
              <th scope="col" style={{width: "15%"}}>표지</th>
              <th scope="col" style={{width: "35%"}}>책이름</th>
              <th scope="col" style={{width: "25%"}}>저자 </th>
              <th scope="col" style={{width: "15%"}}>가격</th>
            </tr>
          </thead>
          <tbody>
              {books.map((book, index) => (
              <BookList book={book} index={index} key={book.itemId}/>
            ))}
          </tbody>
        </table>

        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" >Previous</a>
            </li>
            {[...Array(paginator.maxResults)].map((n, index) => {
              return (
              <li className="page-item" key={index}><a className="page-link" href="#">{index+1}</a></li>
              )
            })}
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>`
        </nav> */}
          
        </div>
    </div>
  );
};

export default BookSearch;
