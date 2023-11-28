import axios from "axios";
import { HOST_API_KEY } from "@constants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageEnum } from "@constants/local-storage-keys";
import { TokensUtils } from "@utils/tokens.utils";
import { SessionAPI } from "@apis/SessionAPI";

const api = axios.create({ baseURL: HOST_API_KEY });

api.interceptors.request.use(async function (config) {

    let accessToken = await AsyncStorage.getItem(AsyncStorageEnum.ACCESS_TOKEN);
    if (accessToken) {
        const isExpired = TokensUtils.isTokenExpired(accessToken);
        if(isExpired) {
            const refreshToken = await AsyncStorage.getItem(AsyncStorageEnum.REFRESH_TOKEN);
            const data = await SessionAPI.restoreSession(refreshToken!);
            await AsyncStorage.setItem(AsyncStorageEnum.ACCESS_TOKEN, data.accessToken);
            await AsyncStorage.setItem(AsyncStorageEnum.REFRESH_TOKEN, data.refreshToken);
            accessToken = data.accessToken;
        }
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default api;
