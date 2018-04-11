import Vue from 'vue'
import axios from "axios";


// let getClassify = () => axios.get("http://localhost:3010/classify")

let getClassify = function(){
    return axios.get("http://localhost:3010/classify")
}

let getArticleDetail = function(){
    return axios.get("http://localhost:3010/users")
} 
// let getArticleDetail = () => axios.get("http://localhost:3010/users")
export default{  
    getClassify : getClassify,
    getArticleDetail : getArticleDetail
}   