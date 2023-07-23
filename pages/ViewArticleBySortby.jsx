import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import allArticlesSorted from "../apis/allArticlesSorted";
import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";
import PopularArticlesList from "../components/PopularArticlesList";

function ViewArticleByVote() {
  const [articles, setArticles] = useState([]);
  const { sort_by } = useParams();
  useEffect(() => {
    allArticlesSorted(sort_by).then((filteredArticles) => {
      setArticles(filteredArticles);
    });
  }, [sort_by]);

  return (
    <div>
      <HomepageHeader></HomepageHeader>
      <Navbar></Navbar>
      <PopularArticlesList articlesFromAPI={articles} />
    </div>
  );
}

export default ViewArticleByVote;
