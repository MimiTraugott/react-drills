import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super();

    this.state = {
      horses: ["Vikki", "Misty", "Charlie", "Emma", "Alli"]
    }
  }


  render (){
    let horsesThatDied = this.state.horses.map((element, index) =>{return <h2 key={index}>{element}</h2>;
  });
  return <div className="App">{horsesThatDied}</div>
  }
}
export default App;