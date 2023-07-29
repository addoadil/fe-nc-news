import axios from "axios";

const deleteCommentApiCall = (comment_id) => {
    return axios.delete(`https://news-application-f2jb.onrender.com/api/comments/${comment_id}`)
        .then((deletedComment) => {
            return deletedComment.data;
        });
};

export default deleteCommentApiCall;