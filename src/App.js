import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/posts/post";
import Tracker from "./pages/tracker";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="/" element={<Tracker />}></Route>
      </Routes>
    </div>
  );
}

export default App;
