import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 2,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      fontSize: 18,
    },
    touchContainer: {
      padding: 3,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignSelf: 'stretch',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    iconContainer: {
      color: 'white', 
      alignSelf: 'stretch',
      backgroundColor: 'rgb(136, 136, 250)',
      fontSize: 35,
      borderRadius: 100,
      marginTop:10, 
      paddingVertical: 10, 
      paddingHorizontal: 15,
      padding: -200,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    buttonContainer: {
      backgroundColor: 'rgb(136, 136, 250)',
      fontSize: 20, 
      color: 'white',
      borderRadius: 15, 
      marginTop:10,
      paddingVertical: 10,
      paddingHorizontal: 30,
    },
    animationContainer: {
      width: 200, 
      height: 200,
      resizeMode: 'contain',
      backgroundColor: 'transparent',
      justifyContent: 'center',
    },
    animationStyle: {
      width: 200,
      height: 200,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    dialogContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  }); 

  export default styles;