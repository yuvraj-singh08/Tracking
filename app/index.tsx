import MainComp from "@/components/MainComp";
import FrontPage from "@/components/Dashboard/Registration/FrontPage/FrontPage";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

// Define the type for your stack parameters
type RootStackParamList = {
  'sign-in': undefined;
  'sign-up': undefined;
};

// Type for the navigation prop
type IndexProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'sign-in'>;
};

export default function Index({}: IndexProps) {
 

  return (
    <View style={{ flex: 1 }}>
      <MainComp  />
    </View>
  );
}
