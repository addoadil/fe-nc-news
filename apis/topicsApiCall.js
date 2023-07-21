import axios from "axios";

const topicApiCall = () => {
    return axios.get('https://news-application-f2jb.onrender.com/api/topics')
        .then((topics) => {
            return topics.data;
        });
};

export default topicApiCall;