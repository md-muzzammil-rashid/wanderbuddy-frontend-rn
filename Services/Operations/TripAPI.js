import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConnector } from "../APIConnector";
import { METHODS, tripEndPoint } from "../apis";

const addTripAPI = async (formData) => {
    const token = await AsyncStorage.getItem('AccessToken')

    try {
        // for(var data of formData){
        //     console.log(data);
        // }
        const res = await apiConnector(METHODS.POST, tripEndPoint.ADD_TRIP, {'Authorization': token, "Content-Type":"application/x-www-form-urlencoded"}, formData)
        if(res){
            console.log(res);
        }
        return res.data
    } catch (error) {
        console.log("Error on addTripAPI");
        console.log(error);
    }
}


const getTripsAPI = async () => {
try {
    const token = await AsyncStorage.getItem('AccessToken')
    const res = await apiConnector(METHODS.GET, tripEndPoint.GET_TRIPS,{Authorization: "Bearer "+token})
    if(res.data.statusCode === 200){
        return res.data.data
    }
    
} catch (error) {
    console.log(error);
}}

const getTripDetailsAPI = async (tripId) => {
try {
        const res = await apiConnector(METHODS.GET, tripEndPoint.GET_TRIP+tripId, {Authorization:"Bearer "+AsyncStorage.getItem('AccessToken')})
        return res.data.data
    
} catch (error) {
    console.log(error);
}}

const addPlaceAPI = async (tripId, tripData) => {
    const token = await AsyncStorage.getItem('AccessToken')
try {
        const res = await apiConnector(METHODS.POST, tripEndPoint.ADD_PLACE+tripId, {Authorization: token}, tripData,)
        if(res){
            return res.data
        }
} catch (error) {
    console.log("Error in adding place to visit!",error);
}}

const addPackingItemsAPI = async (tripId, packingItem) => {
    const token = await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.POST, tripEndPoint.ADD_PACKING_ITEMS+tripId, {Authorization: token},{packingItem})
        if(res){
            return res.data
        }
    } catch (error) {
        console.log("Error in add Packing Items", error);
    }
}

const getPackingItemsAPI = async(tripId) => {
    const token = await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.GET, tripEndPoint.GET_PACKING_ITEMS+tripId, {Authorization: token})
        if(res){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting packing items", error);
    }
}

const editPackingItemAPI = async (packingItemId, updatedPackingItem) => {
    const token = await AsyncStorage.getItem('AccessToken')
    try {
        const res = await apiConnector(METHODS.POST, tripEndPoint.EDIT_PACKING_ITEM+packingItemId, {Authorization: token }, {packingItem: updatedPackingItem})
        return res.data
    } catch (error) {
        console.log("Error in updating packing item", error);
    }
}


export {
    addTripAPI,
    getTripsAPI,
    getTripDetailsAPI,
    addPlaceAPI,
    addPackingItemsAPI,
    getPackingItemsAPI,
    editPackingItemAPI
}