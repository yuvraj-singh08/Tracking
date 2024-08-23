import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    top:50,
    width:"95%",
    left:11,
    alignContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff', // Customize the background color as needed
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Add a border to the bottom of the header
  },
  iconContainer: {
    marginRight: 15, // Adjust spacing between the icon and the title
  },
  icon: {
    width: 24, // Adjust the width of the icon
    height: 24, // Adjust the height of the icon
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Customize the color of the title text
  },
});

export default styles