// CustomDrawerContent.tsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import { getImages } from '../getImage';
const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={getImages.icoFront} // Update the path to your image
        style={styles.image}
      />
      {/* Render default drawer items */}
      <DrawerItemList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: '100%', // Width of the image
    height: 100, // Height of the image
    resizeMode: 'contain', // Ensures image scales correctly
  },
});

export default DrawerContent;
