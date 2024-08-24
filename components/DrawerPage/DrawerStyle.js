// DrawerStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#f7f7f7', // Background color for the drawer
    width: 250, // Width of the drawer
  },
  drawerLabelStyle: {
    fontSize: 18, // Font size for drawer item labels
    color: '#333', // Text color for drawer item labels
  },
  drawerItemStyle: {
    marginVertical: 10, // Spacing between drawer items
    backgroundColor: 'transparent', // Remove the box effect
    borderRadius: 0, // Remove any rounding
  },
  drawerContentStyle: {
    padding: 10, // Padding around the drawer content
  },
});
