import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FrontPage from '../components/Dashboard/Registration/FrontPage/FrontPage';
import Login from '../components/Dashboard/Registration/Login/Login';
import SignUp from '../components/Dashboard/Registration/SignUp/SignUp';
import Home from '../components/Tabs/TabsBarPages/Home';
import Profile from '../components/Tabs/TabsBarPages/Profile';
import Post from '../components/Tabs/TabsBarPages/Post';
import About from '../components/Tabs/TabsBarPages/About';
import CreatePassword from '../components/Dashboard/Registration/CreatePassword/CreatePassword'
import { create } from 'react-test-renderer';

// Define the types for the stack parameters
type RootStackParamList = {
  frontscreen: undefined;
  signin: undefined;
  signup: undefined;
  home: undefined;
  tabbar: undefined;
  createpassword:undefined
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tab Navigator
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Post" component={Post} options={{ headerShown: false }}/>
      <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Post" component={Post} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

// Main Stack Navigator
const MainComp: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="frontscreen">
      <Stack.Screen
        name="frontscreen"
        component={FrontPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signin"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="createpassword"
        component={CreatePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainComp;
