import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import Modal from "./components/Modal";

/*
 *Returns Home,
 *
 */
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Modal />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
