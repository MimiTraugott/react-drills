import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      partyItems: ["plates", "bowls", "cups", "ice", "utensils"]
    };
  }

  render() {
    let partyItemsToList = this.state.partyItems.map((element, index) => {return <h2 key={index}>{element}</h2>;
  });

  return <div className="App">{partyItemsToList}</div>;
  }
}

export default App;
