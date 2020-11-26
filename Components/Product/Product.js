import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';



function Product() {
  return (
    <View style={styles.containerMain}>

      
        <View style={styles.container1}>

            {/* First Item */}
            <Image source={require('../img/47cozy.png')} style={styles.img}/>
            <Text style={styles.text}>47cozy</Text>
            <Button
                style={styles.button} 
                color="darkslateblue"
                onPress={() => Alert.alert("Button Pressed")}
                title="Press here to inquire about this product"
            />

        

            {/* Second Item */}
            <Image source={require('../img/tie dye.png')} style={styles.img}/>
            <Text style={styles.text}>47 Tie Dye</Text>
            <Button 
                style={styles.button} 
                color="darkslateblue"
                onPress={() => Alert.alert("Button Pressed")}
                title="Press here to inquire about this product"
            />
        </View>

      
      
      
      {/* /////////////////////// */}
      
      {/* 3rd Item */}
      {/* <Image source={require('../img/47hoodies.png')} style={styles.img}/>
      <Text style={styles.text}>47 White Hoodie</Text>
      <Button 
        style={styles.button} 
        color="darkslateblue"
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      /> */}

      {/* Item 4 */}
      {/* <Image source={require('../img/47club joggers.png')} style={styles.img}/>
      <Text style={styles.text}>47 Club Jogger</Text>
      <Button 
        style={styles.button} 
        color="darkslateblue"
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      /> */}

      {/* Item 5 */}
      {/* <Image source={require('../img/47SexLounge.png')} style={styles.img}/>
      <Text style={styles.text}>47 Sex Lounge</Text>
      <Button 
        style={styles.button} 
        color="darkslateblue"
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      /> */}

      {/* Item 6 */}
      {/* <Image source={require('../img/47soccer suit.png')} style={styles.img}/>
      <Text style={styles.text}>47 Soccer Suit</Text>
      <Button 
        style={styles.button} 
        color="darkslateblue" 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      /> */}

      {/* Item 7 */}
      {/* <Image source={require('../img/47surfhoodies.png')} style={styles.img}/>
      <Text style={styles.text}>47 Surf Hoodie</Text>
      <Button
        style={styles.button} 
        color="darkslateblue" 
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
      /> */}

      {/* Item 8 */}
      {/* <Image source={require('../img/47sweatpants.png')} style={styles.img}/>
      <Text style={styles.text}>47 Sweat Pants</Text>
      <Button
        style={styles.button} 
        color="darkslateblue"   
        onPress={() => Alert.alert("Button Pressed")}
        title="Press here to inquire about this product"
     /> */}
      
        


    </View>



    );
};

const styles= StyleSheet.create({
    
containerMain: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    
},
  
text: {
    color: "darkslateblue",
    fontSize: 30,
    backgroundColor:"white",
    margin:10,
    width:200,
    textAlign:"center",
    marginBottom:0,
    fontFamily:"cursive",
    marginTop:-10
},

    
    
  
img: {
    height:200,
    width:200,
    marginBottom:10,
    
},
  
  
button:{
      pading:20,
      
}
  
});

export default Product;




