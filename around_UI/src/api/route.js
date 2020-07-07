import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance =  axios.create({
  baseURL: 'http://efa29b92bd69.ngrok.io',
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
