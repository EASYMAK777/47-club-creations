import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header() {
    return (
        <View style = {styles.header}>
            <Text style={styles.text}>Checkout our latest designs</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height:60,
        padding:15,
        backgroundColor:'darkslateblue',
    },
    text:{
        color:"#fff",
        fontSize:23,
        textAlign:"center"
    }
});

export default Header;
       
       
