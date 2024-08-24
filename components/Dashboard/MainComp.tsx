import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FrontPage from './Registration/FrontPage/FrontPage';
import Login from './Registration/Login/Login';
import SignUp from './Registration/SignUp/SignUp';
import Home from '../Tabs/TabsBarPages/Home';
import RouteMap from '../Tabs/TabsBarPages/RouteMap';
import Post from '../Tabs/TabsBarPages/Post';
import About from '../Tabs/TabsBarPages/About';
import Profile from '../DrawerPage/Profile/Profile';
import DriverStatus from '../DrawerPage/Driver status/DriverStatus';
import MailBox from '../DrawerPage/MailBox/MailBox';
import Settings from '../DrawerPage/Settings/Settings';
import Uploads from '../DrawerPage/Uploads/Uploads';
import DrawerStyles from '../DrawerPage/DrawerStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../DrawerPage/DrawerContent';

// Define the types for the stack parameters
type RootStackParamList = {
  frontscreen: undefined;
  signin: undefined;
  signup: undefined;
  home: undefined;
  tabbar: undefined;
  DriverStatus: undefined;
  Settings:undefined
  mail:undefined
  
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tab Navigator
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2299aa',  // Color for active tab label
        tabBarInactiveTintColor: '#888',   // Color for inactive tab label
        tabBarLabelStyle: { fontSize: 12 }, // Style for the label
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Route Map"
        component={RouteMap}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="create" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


// Drawer Navigator
const DrawerNavigator: React.FC =() =>{
  
  return (
    <Drawer.Navigator 
     initialRouteName="Home" 
         drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: DrawerStyles.drawerStyle,
        drawerLabelStyle: DrawerStyles.drawerLabelStyle,
        drawerItemStyle: DrawerStyles.drawerItemStyle,
          drawerContentStyle: DrawerStyles.drawerContentStyle,
      }}
    >
<Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={ 'home-outline'} // Use the appropriate icon name
              size={size}
              color={ '#7cc' }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={ 'person-outline'} // Use the appropriate icon name
              size={size}
              color={ '#7cc' }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Driver Status"
        component={DriverStatus}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={'car-outline'}
              size={size}
              color={'#7cc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={ 'settings-outline'}
              size={size}
              color={'#7cc' }
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Uploads"
        component={Uploads}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={focused ? 'cloud-upload' : 'cloud-upload-outline'}
              size={size}
              color={ '#7cc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mail Box"
        component={MailBox}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={  'mail-outline'}
              size={size}
              color={'#7cc' }
            />
          ),
        }}
      />
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
        name="home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainComp;
