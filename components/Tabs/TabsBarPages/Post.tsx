import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const Post: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  )
}

export default Post