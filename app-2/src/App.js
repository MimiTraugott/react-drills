import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ["milk", "eggs", "bread", "cereal", "catfood"]
    }
  }

  render() {
    let groceriesToDisplay = this.state.groceries.map((element, index) => {return <h2 key={index}>{element}</h2>
  });
    return <div className="App">{groceriesToDisplay}</div>;
  }
  

}
export default App;
