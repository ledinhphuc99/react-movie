import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    handlers:{
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apikey})
});

axiosClient.interceptors.request.use(async (config)=> config);
axiosClient.interceptors.response.use( (response) =>{
    if(response && response.data){
        return response.data
    }
    return response;
}, (err) => {
    throw err;
}
);
export default axiosClient;