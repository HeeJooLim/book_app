import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookList = ({ book, index }) => {

  return (
    <tr>
        <th scope="row">{index+1}</th>
      
        <td className="w-15">
            <img src={book.coverSmallUrl} className="img-fluid img-thumbnail w-50" alt="Sheep"/>
        </td>
        <td><Link to={{ pathname: "/bookDetail", state: {book}, }}>{book.title}</Link></td>
        <td>{book.author}</td>
        <td> {book.priceSales}원 / <del>{book.priceStandard}원 </del><br/>({book.discountRate}% 할인)</td>
    </tr>
  );
};

export default BookList;
