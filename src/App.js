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
        {/*         {this.state.cards.map((card) => {
          <div className="card">
            <p>{card.name}</p>
          </div>



        }

        )



        } */}
      </div>
    );
  }
}

export default App;
