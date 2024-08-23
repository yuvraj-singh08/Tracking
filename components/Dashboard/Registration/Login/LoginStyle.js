import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop:50,
    backgroundColor: '#dfbb4b',
    
  },
    iconStyle: {
        top:80,
    width: 250,  // Set the width of the image
    height: 250, // Set the height of the image
    resizeMode: 'contain', // Optional: controls how the image fits within the bounds
    alignSelf: 'flex-start', // Optional: centers the image horizontally
    marginBottom: 20, // Optional: adds spacing below the image
  },
    imageSize: {
    width: 100,
    height: 190,
  },
  formContainer: {
    width: '100%',
   
    top:60,
   
  },
  input: {
    height: 60,
    backgroundColor: '#1a7c4d',
    borderRadius:5,
    marginBottom: 20,
   fontSize: 17,
    paddingHorizontal: 10,
  },
 
  button: {
    
    marginTop:60,
    backgroundColor: '#2299aa',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#1a7c4d', // Customize color as needed
    fontSize: 16,
  },
  successMessage: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
})
 export default styles