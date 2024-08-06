import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiConnector } from "../APIConnector"
import { messageEndPoint, METHODS } from '../apis'

const getMessagesAPI = async (tripId)=>{
    const token = await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.GET, messageEndPoint.GET_MESSAGE+tripId, {Authorization:token})
        return res.data.data
    } catch (error) {
        console.log(error);
    }
}

const sendMessageAPI = async (tripId, messageData) => {
    const token = await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.POST, messageEndPoint.SEND_MESSAGE+tripId, {Authorization:token}, messageData)
        return res.data
    } catch (error) {
        console.log(error);
    }
}


export {
    getMessagesAPI,
    sendMessageAPI
}