import { getImages } from '@/components/getImage';
import React, { useState } from 'react';
import styles from '../Login/LoginStyle';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  ForgotPassword: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'home'>;

type FrontPageProps = {
  navigation: NavigationProps;
};

const Login: React.FC<FrontPageProps> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const CreatePassword = () => {
    if (password === confirmPassword && password !== '') {
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);

      // Show success alert
      Alert.alert('Success', 'Password created successfully');

      // Delay the navigation by 2 seconds
      setTimeout(() => {
        navigation.navigate('home');
      }, 500);
    } else {
      // Show error alert if passwords don't match or if fields are empty
      Alert.alert('Error', password === '' ? 'Password fields cannot be empty' : 'Passwords do not match');
    }
  };

  return (
     <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
    <ScrollView style={styles.container}>
      <Image source={getImages.icoFront} style={styles.iconStyle} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Create Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={CreatePassword}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
