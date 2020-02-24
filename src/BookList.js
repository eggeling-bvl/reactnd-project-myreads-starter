import React, {Component} from 'react';
import Book from "./Book";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class BookList extends Component {
    static propTypes = {
        books:PropTypes.array.isRequired,
        changeShelf:PropTypes.func.isRequired
    }


    render() {
        const {books,changeShelf} =this.props;


        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book)=>(
                        <li key={book.id}>
                           <Book book={book} books={books} key={book.id} changeShelf={changeShelf}/>
                        </li>
                    ))}


                </ol>
            </div>
        );
    }
}

export default BookList;