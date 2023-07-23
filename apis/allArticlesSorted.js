import axios from "axios";

const allArticlesSorted = (sort_by) => {
    return axios.get(`https://news-application-f2jb.onrender.com/api/articles?sort_by=${sort_by}`)
        .then((articles) => {
            return articles.data;
        });

    
};

export  default allArticlesSorted;;