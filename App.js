import React from 'react'
import { View, StyleSheet} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Home from './Components/Home/Home';




const App = () => {
  return (
    
    
    <View style={styles.container}>
      {/* <Header title="47 Club Creations"/>
      <Product/> */}
    </View>
  );
};
      

      

const styles= StyleSheet.create({

  container:{
    flex: 1,
    paddingTop:60,
    backgroundColor:"gray"
  },

});


export default App;








// Original app is below














{/* First Item
<Text style={styles.text}>Checkout our latest merchandise</Text>
<Image source={require('./assets/47cozy.png')} style={styles.img}/>
<Button 
  onPress={() => Alert.alert("Button Pressed")}
  title="Press here to inquire about this product"
/> */}



{/* Second Item */}
{/* <Text style={styles.text}>Checkout our latest merchandise</Text>
<Image source={require('./assets/tie dye.png')} style={styles.img2}/> */}




// container: {
//   flex:1,
//   justifyContent:'center',
//   alignItems: 'center',
// },
// text: {
//   color: "darkslateblue",
//   fontSize: 30,
// },
// img: {
//   height:200,
//   width:200,
// },
// img2:{
//     height:200,
//     width:200,
//   }
