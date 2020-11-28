import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';
import Header from "../Header/Header"


      
function Product() {
  return (
    <ScrollView style={styles.container__Main}>
        <Header
            style={styles.subHeader} 
            title="Home of the latest fashion"
        />

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
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47hoodies.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Hoody</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47SexLounge.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Sex Lounge</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47soccer suit.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Soccer Suit</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47surfhoodies.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Surf Hoodie</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47sweatpants.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Sweat Pants</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/47sweatshirt with hoodie pocket.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Sweatshirt w/ Hoodie Pocket</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Alert.alert("Button Pressed")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
            {/* First Item */}
            <View style={styles.product__Info}>
                <Image source={require('../img/champion shorts.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Champion Shorts</Text>
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
    
    flex:2,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"black",
    marginTop:10,
    marginBottom:10,
    marginLeft:900,
    marginRight:900
},

product__Info:{
    alignItems:"center"
},
  
text: {
    color: "darkslateblue",
    fontSize: 20,
    backgroundColor:"white",
    margin:10,
    width:200,
    height:40,
    textAlign:"center",
    marginBottom:-15,
    marginTop:-10,
    paddingBottom:-100,
    paddingTop:-20
    
},

    
    
  
product__image: {
    height:200,
    width:200,
    marginBottom:10,
    
},
  
  

});

export default Product;






            

      
      
      
      





