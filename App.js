import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';



function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checkout our latest merchandise</Text>
      <Image source={require('./assets/47cozy.png')} style={styles.img}/>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    color: "darkslateblue",
    fontSize: 30,
  },
  img: {
    height:300,
    width:300,
  }

});

export default App;
