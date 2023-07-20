import axios from "axios";

const addVote = (article_id, addToVote) => {
    let patchRequestBody = {inc_votes: 1}
    if (!addToVote) {
        patchRequestBody = {inc_votes: -1}
    } 

    return axios.patch(`https://news-application-f2jb.onrender.com/api/articles/${article_id}`, patchRequestBody)
        .then((response) => {
            return response.data;
        });
};

export default addVote;