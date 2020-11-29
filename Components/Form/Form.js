import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { Formik } from 'formik';

export default function Form(){
    return(
        <View style={styles.main__container}>
            <Formik
                initialValues={{ title:'', body:'', rating:'' }}
                onSubmit={(values)=> {

                    console.log(values);
                    // values.title
                    // values.body
                    // values.rating
                }}
            >

                {(props)=> (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder="Product Name"
                            onChangeText={props.handleChange("product name")}
                            value={props.values.title}

                        /> 

                        <TextInput 
                            style={styles.input}
                            placeholder="Size"
                            onChangeText={props.handleChange("Size")}
                            value={props.values.body}
                            
                        /> 

                        <TextInput 
                            style={styles.input}
                            placeholder="Color"
                            onChangeText={props.handleChange("color")}
                            value={props.values.rating}
                            
                        /> 


                        <Button
                            title="Submit"
                            style={styles.Button}
                            color="darkslateblue"
                            onPress={props.handleSubmit}
                        />

                        <Button
                            title="Return to product page"
                            style={styles.button}
                            color="darkslateblue"
                            onPress={props.return}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    main__container:{
        flex:1
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
    button:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"black",
        marginTop:10,
        marginBottom:10,
        marginLeft:200,
        marginRight:200,

    }
    



})
