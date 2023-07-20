import axios from "axios";

const addVote = (article_id, flag) => {
    let patchRequestBody = {inc_votes: 1}
    if (!flag) {
        patchRequestBody = {inc_votes: -1}
    } 
    
    axios.patch(`https://news-application-f2jb.onrender.com/api/articles/${article_id}`, patchRequestBody)
        .then((response) => {
            return response.data;
        })
};

export default addVote;