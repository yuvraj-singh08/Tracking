import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Home from '../TabsBarPages/Home';
import Profile from '../TabsBarPages/Profile';
import About from '../TabsBarPages/About';
import Post from '../TabsBarPages/Post';
const Tab = createBottomTabNavigator();
const TabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="post" component={Post} /> 
        <Tab.Screen name="about" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator