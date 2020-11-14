import React, { useState } from "react";
import ReviewList from "./ReviewList";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const regitserReview = () => {
  };

  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <h1>이 책은 어떤가요?</h1>
        <div className="mb-3">
          <label for="validationTextarea"></label>
          <div className="row">
            <input
              type="text" id="userNm"
              className="form-control col-4 mx-3"
              placeholder="닉네임을 입력해주세요!"
            />
            <input
              type="text" id="bookNm"
              className="form-control col-4"
              placeholder="책 이름을 입력해주세요!"
            />
          </div>
          <br />
          <textarea
            className="form-control" id="review"
            placeholder="책 리뷰를 써주세요!"
            required
          ></textarea>
          <br />
        </div>
        <button class="btn btn-dark float-right" onClick={regitserReview}>등록</button>
      </div>

      {reviews.reverse().map((review, index) => (
        <ReviewList review={review}/>
      ))}
    </div>
  );
};

export default Review;
