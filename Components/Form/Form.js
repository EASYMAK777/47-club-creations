import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { Formik } from 'formik';

export default function Form(){
    return(
        <View style={styles.main__container}>
            <Formik
                initialValues={{ title:'', body:'', rating:'' }}
                onSubmit={(values)=> {
                    values.title
                    values.body
                    values.rating
                }}
            >

                {(props)=> (
                    <View>
                        <TextInput 
                            style={styles.form__container}
                            placeholder="Review Title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}

                        /> 

                        <TextInput 
                            style={styles.form__container}
                            placeholder="Review Body"
                            onChangeText={props.handleChange("title")}
                            value={props.values.body}
                            
                        /> 

                        <TextInput 
                            style={styles.form__container}
                            placeholder="Review Rating"
                            onChangeText={props.handleChange("title")}
                            value={props.values.rating}
                            
                        /> 
                    </View>
                )}
            </Formik>
        </View>
    )
}

