import { apiConnector } from "../APIConnector"
import { METHODS, userEndPoint } from "../apis"
import { setItemAsync } from 'expo-secure-store'
import AsyncStorage, {} from '@react-native-async-storage/async-storage'

const SignInAPI = async (formData) => {
    try {
        const response = await apiConnector( METHODS.POST, userEndPoint.SIGNIN,{}, formData )

        if(response){
            if(response.data.statusCode === 202){
                console.log('token saved');
                await setItemAsync('AccessToken', response.data.data.AccessToken);
                await AsyncStorage.setItem('AccessToken', response.data.data.AccessToken);
                await setItemAsync('RefreshToken', response.data.data.RefreshToken);
                await AsyncStorage.setItem('RefreshToken', response.data.data.RefreshToken);
                
            }
            return response.data
        }
    } catch (error) {
        console.log("error in sign in ...",error)
    }
}

const UserDataAPI = async () => {
    try {
        const res = await apiConnector(METHODS.GET, userEndPoint.USERDATA, {Authorization: localStorage.getItem("AccessToken")})
        if(res){
            return res.data.data
        }
    } catch (error) {
        console.log(error);
    }
}


export {
    SignInAPI,
    UserDataAPI
}