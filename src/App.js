import React, { Component } from 'react';
import './App.css';
import Student from './Components/Student'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      query: null,
      filteredList: []
    };
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(({ students }) => {
        this.setState({
          isLoaded: true,
          items: students,
          query: null,
          filteredList: []
        })
      });
  }

  updateQuery = query => {
    this.setState({ query: query });
    if (query.length > 0) this.handleSearch(query);
    else this.setState({ filteredList: [] });
  };

  handleSearch(query) {
    this.state.items.filter()
    BooksAPI.search(query.trim(), 20).then(books => {
      books.error
        ? this.setState({ filteredBooks: [] })
        : this.setState({ filteredBooks: books });
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div>loading data...</div>;
    }

    else {

      return (
        <div className="Data">
          <input
            type="text"
            placeholder="Search by name"
            onChange={event => this.updateQuery(event.target.value)}
          />
          {items.map(item => (
            <Student item={item} />
          ))};
        </div>

      );
    }

  }
}

export default App;
