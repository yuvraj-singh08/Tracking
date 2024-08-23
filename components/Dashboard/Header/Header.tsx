import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './HeaderStyle'
import { getImages } from '@/components/getImage'
import { MaterialIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <MaterialIcons name="menu" size={24} color="black" /> 
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Your Header Title</Text>
    </View>
  )
}


export default Header