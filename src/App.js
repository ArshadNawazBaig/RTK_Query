import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/posts/post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
      </Routes>
    </div>
  );
}

export default App;
