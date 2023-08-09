import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import allArticlesApiCall from "../apis/allArticlesApiCall";

function PopularArticlesList({ articlesFromAPI }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (articlesFromAPI === undefined) {
      allArticlesApiCall()
        .then((response) => {
          setArticles(response);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setArticles(articlesFromAPI);
      setIsLoading(false);
    }
  }, [articlesFromAPI]);

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="article-list">
        {articles.map((article) => {
          const {
            article_id,
            title,
            article_img_url,
            author,
            comment_count,
            created_at,
            votes,
          } = article;
          const publishedDate = created_at.substring(0, 10);
          return (
            <Link to={`/articles/${article.article_id}`} key={article_id}>
              <ul key={article_id} className="article-container">
                <img
                  src={article_img_url}
                  alt={"Image of " + title}
                  className="article-img"
                />
                <li className="article-title">{title}</li>
                <li className="information-source">
                  <span className="info-icon">&#x2139;</span>
                  <div className="article-info-container">
                    <li className="author">Author: {author}</li>
                    <li className="created-at">Published: {publishedDate}</li>
                    <li className="comment-count">
                      {" "}
                      Total comments: {comment_count}
                    </li>
                    <li className="vote-count">Votes: {votes}</li>
                  </div>
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularArticlesList;
