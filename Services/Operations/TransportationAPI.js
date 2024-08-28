import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiConnector } from '../APIConnector'
import { METHODS, transportationEndPoint } from '../apis'

const getFlightsAPI = async (source, destination, date) => {
    try {
        const token = await AsyncStorage.getItem("AccessToken");
        const res = await apiConnector(METHODS.GET, transportationEndPoint.GET_FLIGHTS, null, null, {source, destination, date})
        if(res.status < 300){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting flights: " + error);
    }
}

const getTrainsAPI = async (source, destination, date) => {
    try {
        const token = await AsyncStorage.getItem("AccessToken");
        const res = await apiConnector(METHODS.GET, transportationEndPoint.GET_TRAINS, null, null, {source, destination, date})
        if(res.status < 300){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting trains: " + error);
    }
}

export {
    getFlightsAPI,
    getTrainsAPI
}