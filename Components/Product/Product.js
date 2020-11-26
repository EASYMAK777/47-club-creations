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

      {/* 3rd Item */}
      <Text style={styles.text}>47 White Hoodie</Text>
      <Image source={require('../img/47hoodies.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      {/* Item 4 */}
      <Text style={styles.text}>47 Club Jogger</Text>
      <Image source={require('../img/47club joggers.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      {/* Item 5 */}
      <Text style={styles.text}>47 Sex Lounge</Text>
      <Image source={require('../img/47SexLounge.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      {/* Item 6 */}
      <Text style={styles.text}>47 Soccer Suit</Text>
      <Image source={require('../img/47soccer suit.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      {/* Item 7 */}
      <Text style={styles.text}>47 Surf Hoodie</Text>
      <Image source={require('../img/47surfhoodies.png')} style={styles.img2}/>
      <Button 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      />

      {/* Item 8 */}
      <Text style={styles.text}>47 Sweat Pants</Text>
      <Image source={require('../img/47sweatpants.png')} style={styles.img2}/>
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
    backgroundColor:"white"
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




