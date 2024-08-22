import { getImages } from '@/components/getImage';
import React, { useState } from 'react';
import styles from './LoginStyle';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// Import the icon library
type RootStackParamList = {
  home:undefined
};
type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'home'>;

// Define the props for the FrontPage component
type FrontPageProps = {
  navigation: NavigationProps;
};
const Login: React.FC<FrontPageProps> = ({ navigation })  => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    navigation.navigate('home')
  };

  return (
    <ScrollView style={styles.container}>
  
     <Image source={getImages.icoFront} style={styles.iconStyle} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
};



export default Login;
