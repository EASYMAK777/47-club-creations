import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header({title}) {
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
        borderWidth:1,
        width:400,
        justifyContent:"center",
        
    },
    text:{
        color:"#fff",
        fontSize:30,
        textAlign:"center"
    }
});

export default Header;
       
       
