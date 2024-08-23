import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './SignUpStyle'; // Reuse styles from LoginStyle or define new ones if necessary
import { getImages } from '@/components/getImage'; // Import your image assets
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  createpassword:undefined
};
type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'createpassword'>;
type FrontPageProps = {
  navigation: NavigationProps;
};

const SignUp: React.FC<FrontPageProps> = ({ navigation })=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');


   const handleGetOtp = () => {
    // Handle OTP button logic here
    console.log('OTP:', otp);
  };
  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('OTP:', otp);
navigation.navigate('createpassword')
  };

  return (
    
    <ScrollView style={styles.container}>
      <Image source={getImages.icoFront} style={styles.iconStyle} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <View style={styles.otpContainer}><TextInput
              style={styles.otpInput}
              placeholder="Enter OTP"
             placeholderTextColor="#fff"
            
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
              maxLength={6} // Adjust based on OTP length
            />
            <TouchableOpacity style={styles.otpButton} onPress={handleGetOtp}>
              <Text style={styles.otpButtonText}>Get OTP</Text>
            </TouchableOpacity></View>
       
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
