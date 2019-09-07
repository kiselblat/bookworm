import React, { Component } from "react";
import "./App.css";
import Book from "./components/Book"
import Header from "./components/Header"
import Saved from "./components/Saved"
import Search from "./components/Search"

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Search />
        <Saved />
        <Book />

        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
