import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super();

    this.state = {
    drinks: ["Soda", "Milk", "Beer", "Wine", "Juice", "Tea" ]
  }
  }
  render () {
    let drinksToDisplay=this.state.drinks.map((element, index) => {
      return <h1 key={index}>{element}</h1>;
    });
    return <div className="App">{drinksToDisplay}</div>
  }
}
export default App;