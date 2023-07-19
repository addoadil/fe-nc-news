import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import articleCommentApiCall from "../apis/articleCommentApiCall";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    articleCommentApiCall(article_id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);

  let commentsList;

  if (comments.length > 0) {
    commentsList = comments.map((comment) => {
      const { comment_id, author, body, created_at, votes } = comment;
      const commentDate = created_at.substring(0, 10);

      return (
        <div className="comments-container" key={comment_id}>
          <ul>
            <li>{"Comment by " + author}</li>
            <li>{"Posted on " + commentDate}</li>
            <li>{body}</li>
            <li>{"Total votes: " + votes}</li>
          </ul>
        </div>
      );
    });
  } else {
    commentsList = (
      <div>
        <p>
          This article does not have any comments yet! Be the first to comment
          on this article.
        </p>
      </div>
    );
  }

  return <div>{commentsList}</div>;
}

export default Comments;
