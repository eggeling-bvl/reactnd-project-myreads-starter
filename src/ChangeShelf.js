import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ChangeShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

    updateShelf=(event)=> {
        this.props.changeShelf(this.props.book,event.target.value);
    }
    getShelf =(book)=>{
        const currentShelf =this.props.books.find(b=>b.id===book.id);
        if(currentShelf)
            return currentShelf.shelf;
        else return 'none'

    };
    render() {
        const {book} = this.props;
        return (
            <div className={`book-shelf-changer ${book.shelf}`}>
                <select onChange={this.updateShelf} value={this.getShelf(book)}>
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }


}

export default ChangeShelf;