import axios from "axios";

const articleApiCallByTopic = (topic) => {
    return axios.get(`https://news-application-f2jb.onrender.com/api/articles?topic=${topic}`)
        .then((articles) => {
            return articles.data;
        });
};

export default articleApiCallByTopic;