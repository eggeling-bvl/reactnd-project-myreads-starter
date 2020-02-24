import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchBook extends Component {

    static propTypes = {
        books:PropTypes.array.isRequired,
        changeShelf:PropTypes.func.isRequired,
    }
    state={
        query:'',
        showingBooks:[],
        searchError:false
    }
    updateQuery=(event)=> {
        const query=event.target.value;

        this.setState({query})
        // if user input run the search
        if(query){
            BooksAPI.search(query.trim(),20).then((books) => {
                books.length>0? this.setState({showingBooks:books,searchError:false}):this.setState({showingBooks:[],searchError:true})
            });
            // if query is empty then reset state to default
        }else {this.setState({showingBooks:[],searchError:false})}


    }

    render() {

        const {query,showingBooks,searchError} = this.state;
        const {books,changeShelf} = this.props;



        return (

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                            value={query}
                                   onChange={this.updateQuery}/></div>
                    </div>
                    <div className="search-books-results">
                        {showingBooks.length>0 && (
                            <ol className="books-grid">
                                {showingBooks.map((book)=>(
                                    <Book book={book} books={books} changeShelf={changeShelf} key={book.id}/>
                                ))}
                            </ol>
                        )}
                        {searchError &&( <h3> Please try again</h3>)}

                    </div>
                </div>

        );
    }



}

export default SearchBook;