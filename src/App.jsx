import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ViewArticle from "../pages/ViewArticle";
import TopicCards from "../components/TopicCards";
import ViewArticleByTopic from "../pages/ViewArticleByTopic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<ViewArticle />} />
        <Route path="/articles/topics" element={<TopicCards />} />
        <Route
          path="/articles/sort/:topic"
          element={<ViewArticleByTopic></ViewArticleByTopic>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
