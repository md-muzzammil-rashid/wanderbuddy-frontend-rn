import axios from "axios";

const axiosInstance = axios.create({});
export const apiConnector = ( method, url, header, formData, params ) => {
    return axiosInstance({
        method: method,
        url: url,
        headers: undefined,
        data: formData,
        params: params ,
        withCredentials: true,
        
    })
}