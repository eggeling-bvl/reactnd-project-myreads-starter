import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from "./ChangeShelf";
 import noCover from "./icons/noun_Book_798317.png";

class Book extends Component {
    static propTypes = {
        book:PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const {book,books,changeShelf}=this.props;


       const bookCover=book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail:noCover;
       const title=book.title? book.title:'No title available';

        return (

                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{width:128, height:192, backgroundImage:`url(${bookCover})`}}></div>
                        <ChangeShelf book={book} books={books} changeShelf={changeShelf}/>
                    </div>
                    <div className="book-title">{title}</div>
                    {book.authors&&book.authors.map((author,i)=>(
                        <div className="book-authors" key={i}>{author}</div>
                    ))}

                </div>



        );
    }
}

export default Book;