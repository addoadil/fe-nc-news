import axios from "axios";
import articleCommentApiCall from "./articleCommentApiCall";

const postCommentApiCall = (article_id, username, newComment) => {
    const body = newComment;
    const postRequestBody = {
        username: username,
        body: body
    }

    return axios.post(`https://news-application-f2jb.onrender.com/api/articles/${article_id}/comments`, postRequestBody)
        .then((response) => {
            return response.data;
        });
};

export default postCommentApiCall;