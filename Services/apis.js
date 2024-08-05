// const BASE_URL = 'http://10.0.2.2:5050/'
const BASE_URL = 'http://localhost:5050/'


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
    INVITATION : BASE_URL + API_VERSION + "/invitation"
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



export {
    userEndPoint,
    METHODS,
    tripEndPoint,
    invitationEndPoint
}