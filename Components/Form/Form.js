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
                            placeholder="Review Title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}

                        /> 

                        <TextInput 
                            style={styles.input}
                            placeholder="Review Body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            
                        /> 

                        <TextInput 
                            style={styles.input}
                            placeholder="Review Rating"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            
                        /> 


                        <Button
                            title="Submit"
                            color="maroon"
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
