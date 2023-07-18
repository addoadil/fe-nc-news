import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PopularArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://news-application-f2jb.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="article-list">
        {articles.map((article) => {
          const { article_id, title, article_img_url } = article;
          return (
            <Link to={`/articles/${article.article_id}`}>
              <ul key={article_id} className="article-container">
                <img
                  src={article_img_url}
                  alt={"Image of " + title}
                  className="article-img"
                />
                <li className="article-title">{title}</li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularArticlesList;
