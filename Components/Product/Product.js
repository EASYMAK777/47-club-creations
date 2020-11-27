import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';

      
function Product() {
  return (
    <ScrollView style={styles.container__Main}>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47cozy.png')} style={styles.product__image}/>
                <Text style={styles.text}>47cozy</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>



            {/* Second Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47cozy.png')} style={styles.product__image}/>
                <Text style={styles.text}>47cozy</Text>
                <Button
                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>

            {/* Second Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47cozy.png')} style={styles.product__image}/>
                <Text style={styles.text}>47cozy</Text>
                <Button
                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>

            {/* Second Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47cozy.png')} style={styles.product__image}/>
                <Text style={styles.text}>47cozy</Text>
                <Button
                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
            
        </View>

        
    </ScrollView>
    );           
};






/////////////////////StyleSheet/////////////////////////


const styles= StyleSheet.create({

container__Main: {
    flex:1,
    
    
},

container__Product:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"black",
    marginTop:10,

    
       
},

product__Info:{
    alignItems:"center"
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

    
    
  
product__image: {
    height:200,
    width:200,
    marginBottom:10,
    
},
  
  
button:{
    
      
}
  
});

export default Product;






            

      
      
      
      





