import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/Dashboard/Header/Header'
import Map from '@/components/Dashboard/Map/Map'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.mapContainer}>
        <Map />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});