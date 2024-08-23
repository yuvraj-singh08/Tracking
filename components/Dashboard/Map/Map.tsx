import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Alert, Text, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Header from '../Header/Header'
const Map: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mapRef = useRef<MapView | null>(null); // Reference to the MapView

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Location Error', 'Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setErrorMsg('Failed to get location');
        Alert.alert('Location Error', 'Failed to get location');
      }
    };

    getLocation();
  }, []);

  const initialRegion = {
    latitude: 20.5937, // Center of India
    longitude: 78.9629,
    latitudeDelta: 5.0,
    longitudeDelta: 5.0,
  };

  const handleCenterMap = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }, 1000); // Animate to the user's location over 1 second
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE} // Optional: Use Google Maps instead of Apple Maps
        showsUserLocation={true}
        showsCompass={true}
        
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
            description="This is where I am"
          />
        )}
      </MapView>
      
      <View style={styles.headerContainer}>
        
        <Text >
            <Header/>
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Center Map" onPress={handleCenterMap} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
   width:"95%",
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
 
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: '80%',
    transform: [{ translateX: -75 }], // Center button horizontally
    width: 150,
  },
});

export default Map;
