import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import articleApiCall from "../apis/articleApiCall";
import articleCommentApiCall from "../apis/articleCommentApiCall";
import Comments from "../components/Comments";

function ViewArticle() {
  <Navbar></Navbar>;
  const [article, viewArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    articleApiCall(article_id)
      .then((article) => {
        viewArticle(article.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (article.title === undefined && article.author === undefined) {
    return (
      <div>
        <h1 className="view-article-title">
          We are working on this article at the moment! Come back later :)
        </h1>
      </div>
    );
  } else {
    const publishedDate = article.created_at;
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
            <div>
              <Comments
                article_id={article_id}
                setIsLoading={setIsLoading}
              ></Comments>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ViewArticle;
