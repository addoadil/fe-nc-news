import { useState } from "react";
import postCommentApiCall from "../apis/postCommentApiCall";
import articleCommentApiCall from "../apis/articleCommentApiCall";

function CommentAdder({ article_id, username, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsPosting(true);
    setErrorMessage("");

    postCommentApiCall(article_id, username, newComment)
      .then(() => {
        articleCommentApiCall(article_id).then((response) => {
          setComments(response.data);
          setIsPosting(false);
        });
      })
      .catch((error) => {
        setIsPosting(false);
        setErrorMessage(
          "There was an error posting your comment. Please try again."
        );
      });

    setNewComment("");
  };

  return (
    <form className="commentAdder" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">Got an opinion? Post a comment!</label>
      <textarea
        id="new-comment"
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></textarea>
      <button className="submit-comment" disabled={isPosting}>
        {isPosting ? "Posting comment..." : "Post comment"}
      </button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default CommentAdder;
