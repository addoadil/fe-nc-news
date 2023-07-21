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
    articleApiCallByTopic(topic).then((articlesFromAPI) => {
      setArticles(articlesFromAPI);
    });
  }, [topic]);

  return (
    <div>
      <HomepageHeader></HomepageHeader>
      <Navbar></Navbar>
      <PopularArticlesList articlesFromAPI={articles} />
    </div>
  );
}

export default ViewArticleByTopic;
