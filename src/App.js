import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Nav />} />
          </Routes>
        </Router>
        <SearchBar />
      </div>
    );
  }
}

export default App;
