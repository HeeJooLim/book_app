import React, { useState } from "react";

const ReviewList = ({ review }) => {
  return (
    <div className="jumbotron mt-2 media rounded border p-4">
      {/* <img src="..." className="align-self-center mr-3" alt="..." /> */}
      <div className="media-body">
        <h5 className="mt-0">{review.writer} 님</h5>
        <p>
          {review.review}{" "}
          {review.hashtag ? (
            <span className="text-primary">{review.hashtag}</span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default ReviewList;
