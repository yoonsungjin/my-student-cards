import React, { Component } from 'react';
import './App.css';
import Student from './Components/Student'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(({ students }) => {
        this.setState({
          initialItems: students,
          items: students
        })
      });
  }

  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.firstName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
    console.log(items)

  }

  render() {
    const { items } = this.state;


    return (
      <div className="Data">
        <form>
          <input
            type="text"
            placeholder="Search by name"
            onChange={this.filterList}
          />
        </form>
        {items.map(item => (
          <Student item={item} />
        ))}
      </div>

    );

  }
}

export default App;
