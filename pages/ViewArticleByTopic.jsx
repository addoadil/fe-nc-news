import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleApiCallByTopic from "../apis/articleApiCallByTopic";
import PopularArticlesList from "../components/PopularArticlesList";
import Navbar from "../components/Navbar";
import HomepageHeader from "../components/HomepageHeader";

function ViewArticleByTopic() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleApiCallByTopic(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div>
      <HomepageHeader></HomepageHeader>
      <Navbar></Navbar>
      <PopularArticlesList articles={articles} />
    </div>
  );
}

export default ViewArticleByTopic;
