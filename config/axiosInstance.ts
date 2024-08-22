import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from 'expo-router';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://userappserver.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    const deviceId = await AsyncStorage.getItem('deviceId');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers['Set-Cookie'] = `deviceId=${deviceId}`;
      config.headers['Set-Cookie'] = `token=${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      console.log('401 error intercepted');

      // Removing stored user data
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('token');

      // Use navigation to navigate to the login screen
      // Ensure that you call this function within a component or pass a navigation reference if this is outside a component
      // const navigation = useNavigation();
      // navigation.navigate('Login');
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
