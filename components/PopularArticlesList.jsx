import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import allArticlesApiCall from "../apis/allArticlesApiCall";

function PopularArticlesList({ articlesFromAPI }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articlesFromAPI === undefined) {
      allArticlesApiCall()
        .then((response) => {
          console.log(response);
          setArticles(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setArticles(articlesFromAPI);
    }
  }, [articlesFromAPI]);

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
                <div className="article-info-container">
                  <li className="author">Author: {author}</li>
                  <li className="created-at">Published: {publishedDate}</li>
                  <li className="comment-count">
                    Total comments: {comment_count}
                  </li>
                </div>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularArticlesList;
