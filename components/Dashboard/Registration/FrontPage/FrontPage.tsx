import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import styles from './FrontPageStyle';
import { getImages } from '@/components/getImage';
import { router } from 'expo-router';

// Define the type for the stack parameters
type RootStackParamList = {
  login: undefined;
  frontscreen: undefined;
  signin: undefined;
  signup: undefined;
};


type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'frontscreen'>;

// Define the props for the FrontPage component
type FrontPageProps = {
  navigation: NavigationProps;
};

// Define the FrontPage component
const FrontPage:  React.FC<FrontPageProps> = ({ navigation }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}></Text>
      <Text style={styles.subtitle}></Text>
      <Image source={getImages.icoFront} style={styles.iconStyle} />
      
      <TouchableOpacity style={styles.signInButton} onPress={() =>  navigation.navigate('signin')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FrontPage;
