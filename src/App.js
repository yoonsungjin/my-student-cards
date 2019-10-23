import React, { Component } from 'react';
import './App.css';
import Student from './Components/Student'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(({ students }) => {
        this.setState({
          isLoaded: true,
          items: students,
        })
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
          {items.map(item => (
            <Student item={item} />
          ))};
        </div>

      );
    }

  }
}

export default App;
