import {Component} from 'react'

class Books extends Component {

    getImage = (url) => {
        return `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${url}`
    }

    // addList = (book) => {
    //     this.setState({
    //         list: book
    //     })
    // }

    render() {
        const bookItems = this.props.books.map((book, index) => {
            return <li key={index}>
                <img className="bookImg" src={this.getImage(book.imageLink)}></img>
                {book.title}
            </li>
        })

        return (
            <div>
                <ul className="displayBooks">{bookItems}</ul>
            </div>
        )
    }
}

export default Books