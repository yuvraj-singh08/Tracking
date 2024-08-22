import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop:10,
    backgroundColor: '#dfbb4b',
    
  },
   iconStyle: {
    width: 350,  // Set the width of the image
    height: 350, // Set the height of the image
    resizeMode: 'contain', // Optional: controls how the image fits within the bounds
    alignSelf: 'center', // Optional: centers the image horizontally
    marginBottom: 20, // Optional: adds spacing below the image
  },
  title: {
   
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 40,
  },
  illustration: {
    width: '80%',
    height: 200,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC', // Light blue to represent the illustration area
    borderRadius: 20,
    alignSelf: 'center', // Center the illustration horizontally
  },
  signInButton: {
    backgroundColor: '#1a7c4d', // Dark Blue color
    paddingVertical: 15,
    top:10,
  
    marginBottom: 15,
    width: '90%', // Button width 90% of the container
    alignSelf: 'center', // Center the button horizontally
  },
  signUpButton: {
    backgroundColor: '#2299aa', // White button
    paddingVertical: 15,
    top:10,
   
   
    // Border matches the Sign In button color
    width: '90%', // Button width 90% of the container
    alignSelf: 'center', // Center the button horizontally
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
