import React, {Component} from 'react';
import BookList from "./BookList";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class Bookshelf extends Component {

    static propTypes = {
        books:PropTypes.array.isRequired,
        changeShelf:PropTypes.func.isRequired
    }


    render() {
        const {books,changeShelf} =this.props;

        const shelfTypes = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' },
        ];

        return (
            <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {shelfTypes.map((shelf,index)=>{
                            const shelfBooks=books.filter(book=>book.shelf===shelf.type);

                            return(

                                    <div className="bookshelf" key={index}>
                                        <h2 className="bookshelf-title">{shelf.title}</h2>
                                        <div className="bookshelf-books">
                                            <BookList books={shelfBooks} changeShelf={changeShelf}/>
                                        </div>
                                    </div>


                            );


                        })}


                    </div>
                    <div className="open-search">
                        <Link to="/search" className="open-search-button">Add a book</Link>
                    </div>
                </div>

        );
    }
}

export default Bookshelf;