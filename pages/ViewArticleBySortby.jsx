import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import allArticlesSorted from "../apis/allArticlesSorted";
import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";
import PopularArticlesList from "../components/PopularArticlesList";

function ViewArticleByVote() {
  const [articles, setArticles] = useState([]);
  const { sort_by } = useParams();

  useEffect(() => {
    allArticlesSorted(sort_by).then((filteredArticles) => {
      if (sort_by === 'votes') {
        filteredArticles.sort((a, b) => b.votes - a.votes);
      }
      setArticles(filteredArticles);
    });
  }, [sort_by]);

  return (
    <div>
      <HomepageHeader />
      <Navbar />
      <PopularArticlesList articlesFromAPI={articles} />
    </div>
  );
}

export default ViewArticleByVote;
