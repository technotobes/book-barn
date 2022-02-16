
import React, { Component } from 'react'
import './App.css';
import Books from './components/Books';
import MyList from './components/MyList';
import Nav from './components/Nav';
import Search from './components/Search';

class App extends Component {

  constructor() {
    super()

    this.state = {
      books: [],
      list: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      console.log(books)
      this.setState({
        books:books
      })
    })
  }

  search = () => {
    const filteredBooks = this.state.books.filter((book) => book.title.includes(this.state.search))
    this.setState({
      books: filteredBooks
    })
  }


  handleSearch = (e) => {
      this.setState({
      search: e.target.value
    })
  } 



  render() {
    return (
      <div>
        <Nav />
        <input type="text" placeholder="Search" onChange={this.handleSearch}/>
        <button onClick={this.search}>Search</button>
        <Books books={this.state.books}/>
        {/* <MyList list={this.state.list}/> */}
      </div>
    )
  }
}


export default App;
