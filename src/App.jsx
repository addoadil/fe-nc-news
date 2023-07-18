import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ViewArticle from "../pages/ViewArticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/articles/:article_id" element={<ViewArticle />}></Route>
      </Routes>
    </>
  );
}

export default App;
