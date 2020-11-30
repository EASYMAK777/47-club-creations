import React from 'react';
import { ScrollView, Text, StyleSheet, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { back } from 'react-native/Libraries/Animated/src/Easing';

import Header from '../Header/Header';

export default function Form(){
    return(
        <ScrollView contentContainerStyle={styles.main__container}>
            <Header
            style={styles.subHeader} 
            title="Home of the latest fashion"
        />

                <Formik
                    initialValues={{ productName:'', size:'', color:'', units:'',message:'' }}
                    onSubmit={(values)=> {

                        console.log(values);
                        // values.productName
                        // values.size
                        // values.color
                        // values.units
                    }}
                >

                    {(props)=> (
                        <View>
                            <TextInput 
                                style={styles.input}
                                placeholder="Product Name"
                                onChangeText={props.handleChange("product name")}
                                value={props.values.productName}

                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Size"
                                onChangeText={props.handleChange("Size")}
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
                                placeholder="Number of Units"
                                onChangeText={props.handleChange("number of units")}
                                value={props.values.units}
                                
                            /> 

                            <TextInput 
                                style={styles.input}
                                placeholder="Enter Message Here"
                                onChangeText={props.handleChange("message")}
                                value={props.values.message}
                                
                            /> 

                          <View style={styles.button__view}>
                                <Button
                                    title="Submit"
                                    style={styles.fitToText}
                                    color="darkslateblue"
                                    onPress={props.handleSubmit}
                                />
                          </View>

                          <View style={styles.button__view}>
                                <Button
                                    title="Return to product page"
                                    style={styles.fitToText}
                                    color="darkslateblue"
                                    onPress={props.returnHome}
                                />

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
        backgroundColor:"red",
        marginLeft:30,
        marginRight:30,
        justifyContent:"center",
        alignItems:"center",
    },

    


    input:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"white",
        marginTop:10,
        marginBottom:10,
        marginLeft: 900,
        marginRight:900,
        padding:20

    },
    fitToText:{
       flexDirection:'row',
       justifyContent:"space-between",

    },
    button__view:{
        flex:3,
        width:200,
    }

    

})


