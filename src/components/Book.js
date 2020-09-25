import React from "react";
import PropTypes from 'prop-types';


const Book = ({itemId, categoryId, categoryName, title, author, description, coverUrl}) => {

    return(
        <div className="book">
            <img src={coverUrl}/>
            <p>{categoryName}</p>
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
        </div> 
    )
}


Book.propTypes = {
    itemId : PropTypes.number.isRequired,
    categoryId : PropTypes.string.isRequired,
     categoryName : PropTypes.string.isRequired,
     title : PropTypes.string.isRequired,
     author : PropTypes.string.isRequired,
     description : PropTypes.string.isRequired,
     coverUrl : PropTypes.string.isRequired,
}

export default Book;