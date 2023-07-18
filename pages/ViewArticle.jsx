import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ViewArticle() {
  <Navbar></Navbar>;
  const [article, viewArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    const articleData = axios
      .get(
        `https://news-application-f2jb.onrender.com/api/articles/${article_id}`
      )
      .then((article) => {
        viewArticle(article.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });

    const commentsData = axios
      .get(
        `https://news-application-f2jb.onrender.com/api/articles/${article_id}/comments`
      )
      .then((comments) => {
        setComments(comments.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const publishedDate = article.created_at.substring(0, 10);

  return (
    <div>
      <Navbar></Navbar>
      {
        <div className="view-article-info">
          <h1 className="view-article-title">{article.title}</h1>
          <p>Author: {article.author}</p>
          <p>Votes: {article.votes}</p>
          <p>Published: {publishedDate}</p>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          {comments.map((comment) => {
            const { comment_id, author, body, created_at, votes } = comment;
            const commentDate = created_at.substring(0, 10);
            return (
              <div className="comments-container">
                <ul key={comment_id}>
                  <li>{"comment by " + author}</li>
                  <li>{"posted on " + commentDate}</li>
                  <li>{body}</li>
                  <li>{"Total votes: " + votes}</li>
                </ul>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default ViewArticle;
