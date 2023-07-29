import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import articleCommentApiCall from "../apis/articleCommentApiCall";
import CommentAdder from "./CommentAdder";
import deleteCommentApiCall from "../apis/deleteCommentApiCall";

function Comments({ article_id, username }) {
  const [comments, setComments] = useState([]);
  const [deleteComment, setDeleteComment] = useState(false);

  const handleDelete = (comment_id) => {
    setDeleteComment(true);

    deleteCommentApiCall(comment_id)
      .then((deletedComment) => {
        setComments(
          comments.filter((comment) => comment.comment_id !== comment_id)
        );
        setDeleteComment(false);
      })
      .catch((error) => {
        setDeleteComment(false);
      });
  };

  useEffect(() => {
    articleCommentApiCall(article_id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {});
  }, [article_id]);
  return (
    <div>
      <CommentAdder
        article_id={article_id}
        comments={comments}
        setComments={setComments}
        username={username}
      ></CommentAdder>
      {comments.length > 0 ? (
        comments.map((comment) => {
          const { comment_id, author, body, created_at, votes } = comment;
          const commentDate = created_at.substring(0, 10);

          return (
            <div key={comment_id}>
              <div className="comments-container">
                <ul>
                  <li>{"Posted on " + commentDate}</li>
                  <li>{author + " commented:" + " " + body}</li>
                  <li>{"Total votes: " + votes}</li>
                </ul>
                {deleteComment === comment_id && <p>Deleting comment...</p>}
                <button
                  onClick={() => {
                    handleDelete(comment_id);
                  }}
                  className="delete-comment"
                  disabled={deleteComment}
                >
                  {deleteComment ? "Deleting comment..." : "Delete comment"}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>
            This article does not have any comments yet! Be the first to comment
            on this article.
          </p>
        </div>
      )}
    </div>
  );
}

export default Comments;
