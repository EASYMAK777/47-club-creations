import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';
import Header from "../Header/Header"





      
const Product = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container__Main}>
        <Header
            style={styles.subHeader} 
            title="Inquire about our products here"
        />

        <View style={styles.container__Product}>
           
            <View style={styles.product__Info}>
                <Image source={require('../img/47cozy.png')} style={styles.product__image}/>
                <Text style={styles.text}>47cozy</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() =>navigation.navigate("Form")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>
               



                

        <View style={styles.container__Product}>
           
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
         
            <View style={styles.product__Info}>
                <Image source={require('../img/47soccer-suit.png')} style={styles.product__image}/>
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
          
            <View style={styles.product__Info}>
                <Image source={require('../img/47surfhoodies.png')} style={styles.product__image}/>
                <Text style={styles.text}>47 Surf Hoodie</Text>
                <Button

                    style={styles.button} 
                    color="darkslateblue"
                    onPress={() => Navigation.navigate("Form")}
                    title="Press here to inquire about this product"
                />
            </View>
        </View>

        <View style={styles.container__Product}>
           
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
           
            <View style={styles.product__Info}>
                <Image source={require('../img/47sweatshirt-hoodie.png')} style={styles.product__image}/>
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
           
            <View style={styles.product__Info}>
                <Image source={require('../img/champion-shorts.png')} style={styles.product__image}/>
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


    

container__Product:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"black",
    
},
    
    
    

product__Info:{
    alignItems:"center",
    flexDirection:"column",
    margin:20,
},
  
text: {
    backgroundColor: "darkslateblue",
    fontSize: 20,
    color:"black",
    textAlign:"center",
    margin:10,
},
    
    

    
    
  
product__image: {
    height:200,
    width:200,
    marginBottom:10,
    
},
  
  

});

export default Product;






            

      
      
      
      





