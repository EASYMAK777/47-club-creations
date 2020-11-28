import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import { Formik } from 'formik';

export default function Form(){
    return(
        <View style={styles.main__container}>
            <Formik
                initialValues={{ title:'', body:'', rating:'' }}
            ></Formik>
        </View>
    )
}

