import React from 'react';
import { ScrollView, Text, StyleSheet, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { back } from 'react-native/Libraries/Animated/src/Easing';

import Header from '../Header/Header';

const Form = ({ navigation }) => {
    return(
        <ScrollView contentContainerStyle={styles.main__container}>

                <Header
                style={styles.header} 
                title="Use this form to inquire about our products"
                />
                <Formik style={styles.formik__container}
                    initialValues={{ product:'', size:'', color:'', units:'',message:'',emailAddress:'' }}
                    onSubmit={(values)=> {
                        
                        console.log(values);
                        // values.productName
                        // values.size
                        // values.color
                        // values.units
                    }}
                >

                    {(props)=> (
                        <View style={styles.input__container}>
                                
                                <TextInput 
                                style={styles.input}
                                placeholder="Enter Product Name"
                                onChangeText={props.handleChange("product")}
                                value={props.values.product}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Size"
                                onChangeText={props.handleChange("size")}
                                value={props.values.size}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Color"
                                onChangeText={props.handleChange("color")}
                                value={props.values.color}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Number of units"
                                onChangeText={props.handleChange("units")}
                                value={props.values.units}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Enter Message Here"
                                onChangeText={props.handleChange("message")}
                                value={props.values.message}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Enter Your Email Address"
                                onChangeText={props.handleChange("emailAddress")}
                                value={props.values.emailAddress}
                                
                            /> 

                        <View style={styles.submit__button}>
                          <View style={styles.button__view}>
                                <Button
                                    title="Submit"
                                    style={styles.fitToText}
                                    color="darkslateblue"
                                    onPress={props.handleSubmit}
                                />
                          </View>
                        </View>
                        
                        
                        <View style={styles.returnHome__button}>

                          <View style={styles.button__view}>
                                <Button
                                    title="Return to product page"
                                    style={styles.fitToText}
                                    color="darkslateblue"
                                    onPress={()=> navigation.navigate("Products")}
                                />

                          </View>

                        </View>





                        </View>
                    )}
                </Formik>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main__container:{
        flex:1,
        backgroundColor:"black",
        marginLeft:30,
        marginRight:30,
        justifyContent:"center",
        alignItems:"center",
    },

    formik__container:{
        flex:1,
        paddingBottom:20,
    },  

    input__container:{
        flex:2,
        marginTop:-30,
        marginBottom:30,
        alignItems:"center",
        marginRight:100,
        marginLeft:100,
        justifyContent:"center",
        padding:40,
        
        

    },

    header:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },

    


    input:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"white",
        width:300,
        height:50,
        marginBottom:10,
        marginLeft: 900,
        marginRight:900,
        padding:20

    },
    fitToText:{
       flexDirection:'row',
       paddingRight:20,
       borderColor:"red"
       

    },
    button__view:{
        flex:3,
        width:200,
        justifyContent:"center",
        margin:10,
        
    
    },

    submit__button:{
        flex:3,
        marginBottom:-10,
    },

    returnHome__button:{
        flex:3,
        paddingBottom:0,
        
        


    }



    

})

export default Form;


