import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import axios from "axios";
import qs from "qs";

const BookDetail = ({ location, history }) => {
  const { state } = location;

  const {
    index,
    itemId,
    categoryId,
    categoryName,
    title,
    author,
    publisher,
    description,
    coverLargeUrl,
    priceSales,
    priceStandard,
    discountRate,
    saleStatus,
    link,
  } = state.book;
  

  const [reviews, setReviews] = useState([]);

  const getReviews = async() => {
    
    var url = "/book/" + state.book.itemId + "/review";
    console.log(url);
    const _reviews = await axios.get(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: { bookId : itemId },
      
    });

    //console.log(_reviews.data.data);
    setReviews(_reviews.data.data);
  }

  useEffect(() => {
    getReviews();
  }, []);


  const moveLink = () => {
    console.log(link);
    return (window.location.href = link);
  };


  const [newReview, setNewReview] = useState({
    writer  : "",
    review : ""
  });

  const {writer, review} = newReview;
  
  const onChange = e=> {
    
    const nextReview = {
      ...newReview,
      [e.target.name] : e.target.value
    };
    setNewReview(nextReview);
  }


  const regitserReview = () =>{
    var url = "http://localhost:3001/book/" + itemId + "/review";

    if(!writer){
      alert("닉네임을 입력해주세요 (❁´◡`❁)");
      return;
    }
    if(!review){
      alert("리뷰를 입력해주세요 (❁´◡`❁)");
      return;
    }

    let data = { bookId : itemId, writer : writer, review : review, hashtag : `#${title}`, createdAt : new Date()};
    axios.post( url, qs.stringify(data), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(function (response) {
      console.log(response.data);
      //setReviews([...reviews, data]);
      getReviews();
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }



  return (
    <div className="container">
      <div className="card mt-4 mb-5">
        <div className="row align-items-center m-2">
          <div className="col-lg-3 m-3">
            <img
              className="img-fluid rounded mb-6 mb-lg-0"
              src={coverLargeUrl}
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light">{title}</h1>
            <p>
              {itemId}
              판매가 : {priceSales} | 정가 : {priceStandard} ({discountRate}%
              할인)
            </p>
            <p>
              <span className="text-warning">{saleStatus}</span>
            </p>
            <button className="btn btn-primary" onClick={moveLink}>
              구매하러가기
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="m-4">
            <p className="card-text"> {categoryName}</p>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">작가 : {author}</p>
            <p className="card-text">출판사 : {publisher}</p>
          </div>
          <hr></hr>
          <div className="m-4">
            <p className="card-text">{description}</p>
          </div>
          <hr></hr>
          <div className="m-4">
            <h4>후기</h4>
              <span>{itemId}후기를 자유롭게 작성해주세요 (❁´◡`❁)</span>
            <div>
            <div className="jumbotron mt-3 pt-3">
              <div className="mb-3">
                <label htmlFor="validationTextarea"></label>
                <div className="row">
                  <input
                    type="text"
                    id="writer"
                    name = "writer"
                    value={writer}
                    onChange={onChange}
                    className="form-control col-4 mx-3"
                    placeholder="닉네임을 입력해주세요!"
                  />
                </div>
                <br />
                <textarea
                  className="form-control"
                  id="review"
                  name ="review"
                  value={review}
                  placeholder="책 리뷰를 써주세요!"
                  onChange={onChange}
                  required

                ></textarea>
                <br />
              </div>
              <button className="btn btn-dark float-right" onClick={regitserReview}>등록</button>
            </div>
            </div>
            <div className="mt-2">
            {reviews.reverse().map((review, index) => (
              <ReviewList review={review}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
