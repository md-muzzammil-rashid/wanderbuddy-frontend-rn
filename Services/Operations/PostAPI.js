import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConnector } from '../APIConnector'
import { METHODS, postEndPoint } from '../apis'

const createPostAPI = async (postData) => {
    const token = await AsyncStorage.getItem("AccessToken")
    try {
        const res = await apiConnector(METHODS.POST, postEndPoint.ADD_POST, {Authorization: token}, postData)
        if(res.status < 300){
            return res.data;
        }
    } catch (error) {
        console.log("Error in creating post:" ,error);
    }
}

const getAllPostsAPI = async (page, limit) => {
    try {
        console.log(postEndPoint.GET_POSTS);
        
        const res = await apiConnector(METHODS.GET, postEndPoint.GET_POSTS)
        return res.data;
    } catch (error) {
        console.log("Error in getting all posts:", error);
    }
}

const likePostAPI = async (postId) => {
    try {
        const token = await AsyncStorage.getItem("AccessToken")
        const res = await apiConnector(METHODS.POST, postEndPoint.LIKE_POST, {Authorization: token}, {postId})
        if(res.status <300){
            return res.data
        }
    } catch (error) {
        console.log("Error in liking post:", error);
    }
}

const getPostDetailsAPI = async (postId) => {
    try {
        const token = await AsyncStorage.getItem("AccessToken")
        console.log(postEndPoint.GET_POST, postId);
        const res = await apiConnector(METHODS.GET, postEndPoint.GET_POST, {Authorization:token}, null, {postId})
        
        if(res.status <300){
            return res.data
        }
    } catch (error) {
        console.log("Error in getPostDetails:", error);
        
        
    }
}

const getCommentsAPI = async (postId, page, limit) => {
    try {
        const token = await AsyncStorage.getItem("AccessToken")
        const res = await apiConnector(METHODS.GET, postEndPoint.GET_COMMENTS, {Authorization:token}, null, {postId, page, limit})
        if(res.status <300){
            return res.data
        }
    } catch (error) {
        
    }
}



export {
    createPostAPI,
    getAllPostsAPI,
    likePostAPI,
    getPostDetailsAPI,
    getCommentsAPI
}