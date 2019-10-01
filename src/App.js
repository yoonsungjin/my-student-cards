import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        this.setState({ cards: data })
        console.log(this.state.cards)
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
