import axios from "axios"

const allArticlesApiCall = () => {
    return axios.get("https://news-application-f2jb.onrender.com/api/articles")
        .then((response) => {
            return response.data;
        });
};

export default allArticlesApiCall