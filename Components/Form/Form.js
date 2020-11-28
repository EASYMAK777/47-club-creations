import React from 'react'
import { View, 
        StyleSheet, 
        Text,
        TextInput,
        ViewStyle,
        TextStyle,
        TextInputProps, 
} from 'react-native'

function Form() {
    return (
        <View style = {styles.header}>
            <Text style={styles.text}>{title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height:60,
        padding:15,
        backgroundColor:'darkslateblue',
        borderWidth:1
    },
    text:{
        color:"#fff",
        fontSize:30,
        textAlign:"center"
    }
});

export default Form;