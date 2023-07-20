import axios from 'axios';

const articleApiCall = (article_id) => {
  return axios
    .get(
      `https://news-application-f2jb.onrender.com/api/articles/${article_id}`
    );
};


export default articleApiCall;