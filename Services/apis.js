// const BASE_URL = 'http://10.0.2.2:5050/'
// const BASE_URL = 'http://localhost:5050/'
const BASE_URL = "http://192.168.113.81:5050/"


const METHODS = {
    GET : 'GET',
    POST : 'POST',
    PUT : 'PUT',
    DELETE : 'DELETE'
}

const API_VERSION = 'api/v1'

const route = {
    USERS : BASE_URL + API_VERSION + "/users",
    TRIP : BASE_URL + API_VERSION + "/trip",
    INVITATION : BASE_URL + API_VERSION + "/invitation",
    MESSAGE : BASE_URL + API_VERSION + "/message",
    POST : BASE_URL + API_VERSION + "/post",
    TRANSPORTATION : BASE_URL + API_VERSION + "/transportation"
}

const userEndPoint = {
    SIGNIN : route.USERS + "/signin",
    SIGNUP : route.USERS + "/signup",
    USERDATA : route.USERS + "/get-user-data"
}

const tripEndPoint = {
    ADD_TRIP : route.TRIP + "/add-trip",
    GET_TRIPS : route.TRIP + "/get-trips",
    GET_TRIP : route.TRIP + "/get-trip/",
    ADD_COMPANIONS : route.TRIP + "/add-collaborator/",
    GET_INVITATIONS : route.TRIP + "/get-invitations",
    ADD_PLACE : route.TRIP + "/add-place/",
    ADD_PACKING_ITEMS : route.TRIP + "/add-packing/",
    GET_PACKING_ITEMS : route.TRIP + "/get-packing/",
    EDIT_PACKING_ITEM : route.TRIP + "/edit-packing/"
}

const invitationEndPoint = {
    ADD_COLLABORATOR : route.INVITATION + "/add-collaborator/",
    GET_INVITATIONS : route.INVITATION + "/get-invitations",
    RESPOND_TO_INVITATIONS : route.INVITATION + "/respond-to-invitations"
}

const messageEndPoint = {
    GET_MESSAGE : route.MESSAGE + "/get-messages/",
    SEND_MESSAGE : route.MESSAGE + "/send-message/"
}

const postEndPoint = {
    ADD_POST : route.POST + "/add",
    GET_POSTS : route.POST + "/all-posts",
    GET_POST : route.POST + "/get-post/",
    LIKE_POST : route.POST + "/like-post/",
    COMMENT_POST : route.POST + "/comment-post/",
    GET_COMMENTS : route.POST + "/get-comments/",
    
    GET_USER_POSTS : route.POST + "/get-user-posts/",
    DELETE_POST : route.POST + "/delete-post/",
    GET_POST_REPLIES : route.POST + "/get-post-replies/",
    DELETE_POST_REPLY : route.POST + "/delete-post-reply/",
    
}

const transportationEndPoint = {
    GET_FLIGHTS : route.TRANSPORTATION + "/get-flights",
    GET_TRAINS : route.TRANSPORTATION + "/get-trains",
    
}


export {
    userEndPoint,
    METHODS,
    tripEndPoint,
    invitationEndPoint,
    messageEndPoint,
    postEndPoint,
    transportationEndPoint
}