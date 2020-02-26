import React from 'react'
import './App.css'
import SearchBook from "./SearchBook";
import Bookshelf from "./Bookshelf";
import {Route} from "react-router-dom";
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
   books:[],

  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState(()=>({books}))})
  }

  changeShelf=(changedBook,shelf)=>{
    BooksAPI.update(changedBook,shelf).then((res)=>{

      //set shelf for new or updated book
      changedBook.shelf=shelf;
      // update state with changed book
      this.setState(currBooks=>({
        books:currBooks.books.filter(book=>book.id !==changedBook.id).concat(changedBook)
      }))
    })
  }

  render() {
    const {books}=this.state


    return (
      <div className="app">
      <Route exact path="/">

          <Bookshelf
              changeShelf={this.changeShelf}
              books={books}
          />

      </Route>

      <Route path="/search">
          <SearchBook
              changeShelf={this.changeShelf} books={books}
          />
      </Route>
      </div>
    )
  }
}

export default BooksApp
