import React, { Component } from "react";
import "./scss/styles.scss";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />

        <div className="App-body-container">
          <div className="App-body">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
