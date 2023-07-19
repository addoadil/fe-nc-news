import axios from 'axios';

const articleApiCall = (article_id) => {
  console.log(article_id, 'articleApi');
  return axios
    .get(
      `https://news-application-f2jb.onrender.com/api/articles/${article_id}`
    );
};


export default articleApiCall;