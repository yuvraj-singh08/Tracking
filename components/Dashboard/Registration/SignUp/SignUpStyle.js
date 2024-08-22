import { StyleSheet } from "react-native"

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
   // Optional: adds spacing below the image
  },
  formContainer: {
    top:-20,
    width: '100%',
    padding: 10, 
  },
  input: {
    height: 60,
    backgroundColor: '#1a7c4d',
    borderRadius:5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
 otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpInput: {
    height: 60,
    width: "60%",
    backgroundColor: '#1a7c4d',
    borderRadius: 5,
    marginRight: 10, // Space between input and button
    paddingHorizontal: 10,
    color: '#fff', // Ensure text is visible
  },
  otpButton: {
    height: 50,
    width: 100, // Adjusted width for better fit
    backgroundColor: '#2299aa',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    top:10,
    height:60,
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
})
 export default styles