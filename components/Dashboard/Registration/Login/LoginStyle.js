import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop:50,
    backgroundColor: '#dfbb4b',
    
  },
    iconStyle: {
        top:30,
    width: 350,  // Set the width of the image
    height: 350, // Set the height of the image
    resizeMode: 'contain', // Optional: controls how the image fits within the bounds
    alignSelf: 'center', // Optional: centers the image horizontally
    marginBottom: 20, // Optional: adds spacing below the image
  },
  formContainer: {
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
  button: {
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