import { getImages } from '@/components/getImage';
import React, { useState } from 'react';
import styles from './LoginStyle';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  ForgotPassword: undefined; // Add the ForgotPassword screen to your navigation stack
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'home'>;

type FrontPageProps = {
  navigation: NavigationProps;
};

const Login: React.FC<FrontPageProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    navigation.navigate('home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Navigate to ForgotPassword screen
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
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
