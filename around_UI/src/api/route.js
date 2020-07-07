import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { baseurl } from './baseurl';

const instance =  axios.create({
  baseURL: baseurl.baseURL,
});

instance.interceptors.request.use(
  async(config) => {
    const userDataString = await AsyncStorage.getItem('token');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      config.headers.Authorization = 'Bearer ' + userData.token;
    }
    return config;
  },
  () => {}
);

export default instance;
