import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConnector } from "../APIConnector";
import { METHODS, invitationEndPoint } from "../apis";

const addCompanionsAPI = async (username, tripId) => {
    try {
        const token = "Bearer " + await AsyncStorage.getItem('AccessToken')

        const res = await apiConnector(METHODS.POST, invitationEndPoint.ADD_COLLABORATOR+tripId, {Authorization: token}, username)
        return res.data
    } catch (error) {
        console.log("error in adding companion",error);
    }
}

const getInvitationsAPI = async () => {
    const token = "Bearer " + await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.GET, invitationEndPoint.GET_INVITATIONS, {Authorization:token})
        return res.data.data
    } catch (error) {
        console.log(error);
    }
}

const respondToInvitationsAPI = async (data) => {
    try {
        const token = "Bearer " + await AsyncStorage.getItem('AccessToken')
        const res = await apiConnector(METHODS.POST, invitationEndPoint.RESPOND_TO_INVITATIONS, {Authorization: token}, data)
        console.log("$$$$$$$$$ RESPONSE $$$$$$$$$$$$");
        console.log(res.data)
        console.log("res.data =========")
        console.log(res.data.data)
        console.log("$$$$$$$$$ RESPONSE end $$$$$$$$$$$$");
        return res.data.data
    } catch (error) {
        console.log(error);
    }
}




export {
    addCompanionsAPI,
    getInvitationsAPI,
    respondToInvitationsAPI
}