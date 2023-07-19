import axios from 'axios'

const articleCommentApiCall = (article_id) => {
    return axios
        .get(
            `https://news-application-f2jb.onrender.com/api/articles/${article_id}/comments`
        );
};

export default articleCommentApiCall;