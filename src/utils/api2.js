import axios from "axios";
const API2 = {
    getUsers:function(){
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}

export default API2