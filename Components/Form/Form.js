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
                            color="darkslateblue"
                            onPress={props.handleSubmit}
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
        flex:1
    }
})
