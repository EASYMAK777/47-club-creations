import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';



function App() {
  return (
    <View style={styles.container}>

      

      {/* First Item */}
      <Text style={styles.text}>Checkout our latest merchandise</Text>
      <Image source={require('./assets/47cozy.png')} style={styles.img}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      

      {/* Second Item */}
      {/* <Text style={styles.text}>Checkout our latest merchandise</Text>
      <Image source={require('./assets/tie dye.png')} style={styles.img2}/> */}
      

    </View>



);
};

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    color: "darkslateblue",
    fontSize: 30,
  },
  img: {
    height:200,
    width:200,
  },
  img2:{
      height:200,
      width:200,
    }
  
});

export default App;




