import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import articleApiCall from "../apis/articleApiCall";
import Comments from "../components/Comments";
import addVote from "../apis/votingApiCall";

function ViewArticle() {
  <Navbar></Navbar>;
  const [article, viewArticle] = useState({});
  const [networkError, setNetworkError] = useState(false);
  const [vote, setVote] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const handleClick = (article_id, addToVote) => {
    setNetworkError(false);

    setVote((currentVote) => {
      if (addToVote) {
        if (currentVote === -1) return 0;
        return 1;
      } else {
        if (currentVote === 1) return 0;
        return -1;
      }
    });

    addVote(article_id, addToVote).catch(() => {
      setVote((currentVote) => {
        if (addToVote) {
          if (currentVote === 1) return 0;
          return -1;
        } else {
          if (currentVote === -1) return 0;
          return 1;
        }
      });
      setNetworkError(true);
    });
  };

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
            <p>Votes: {article.votes + vote}</p>
            {networkError && (
              <p className="error-message">
                Failed to vote. Please check your internet connection.
              </p>
            )}
            <button
              aria-label="upvote this article"
              className="vote-btn"
              onClick={() => {
                handleClick(article_id, true);
              }}
              disabled={networkError || vote === 1}
            >
              Upvote
            </button>
            <button
              aria-label="downvote this article"
              className="vote-btn"
              onClick={() => {
                handleClick(article_id, false);
              }}
              disabled={networkError || vote === -1}
            >
              Downvote
            </button>
            <p>Published: {publishedDate}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <div>
              <Comments
                article_id={article_id}
                username={article.author}
              ></Comments>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ViewArticle;
