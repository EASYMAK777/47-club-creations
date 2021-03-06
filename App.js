import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native'

import Header from './Components/Header/Header';
// import Home from './Components/Header/Header';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';


const Home = ({ navigation }) => {
  return (
      <View style={styles.main__container}>
          <Header
              title="Welcome to 47 Club Creations" 
              style = {styles.header}
          />

          
          <Button title="Check our latest merchandise"
          onPress={()=> navigation.navigate("Products")}
          />
      
      </View>
  )
}


const AppStack = createStackNavigator(); 

function App(){
  return(
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="47 Club Creations" component={Home}/>
        <AppStack.Screen name="Products" component={Product}/>
        <AppStack.Screen name ="Inquiry Form" component={Form}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  main__container:{
    flex:1,
    alignItems:"center",
    flexDirection:"column",
  },

  
})


export default App;












// import React from 'react'
// import { View, StyleSheet, Text} from 'react-native';
// import Header from './Components/Header/Header';
// import Product from './Components/Product/Product';




// const App = () => {
//   return (
    

//     <View style={styles.container}>
//       <Header title="47 Club Creations"/>
//       <Product/>
//     </View>

//     );
//   };
  

      

// const styles= StyleSheet.create({

//   container:{
//     flex: 1,
//     paddingTop:60,
//     backgroundColor:"gray"
//   },

// });


// export default App;







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
