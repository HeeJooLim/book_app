import React from "react";
import PropTypes from "prop-types";
import { CardGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = ({book}) => {
  const {
    index,
    itemId,
    categoryId,
    categoryName,
    title,
    author,
    description,
    coverLargeUrl,
  } = book;
  return (
    <div className="book col-3 my-3">
      <Card>
        <Card.Img
          className="mx-auto"
          variant="top p-3"
          src={coverLargeUrl}
          alt={title}
          style={{
            width: "75%",
            height: "12vw",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>
            <strong>
              <span role="img" aria-label="book">
                📖
              </span>{" "}
              {title}
            </strong>
          </Card.Title>
          <Card.Text>
            <small className="text-mutedt">✏ {author ? author : "-"}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link
            to={{
              pathname: "/bookDetail",
              state: {
                book
              },
            }}
          >
            <small className="text-muted">도서 상세내용 보기 ✔</small>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

// Book.propTypes = {
//   itemId: PropTypes.number.isRequired,
//   categoryId: PropTypes.string.isRequired,
//   categoryName: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   coverUrl: PropTypes.string.isRequired,
// };

export default Book;
