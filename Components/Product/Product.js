import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';



function Product() {
  return (
    <View style={styles.container}>

      

      {/* First Item */}
      <Text style={styles.text}>47cozy</Text>
      <Image source={require('../img/47cozy.png')} style={styles.img}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      

      {/* Second Item */}
      <Text style={styles.text}>47 Tie Dye</Text>
      <Image source={require('../img/tie dye.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

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

export default Product;




