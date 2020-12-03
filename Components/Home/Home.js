import React from 'react'
import { View, } from 'react-native'
import Header from '../Header/Header'



const Home = ({ navigation }) => {
    return (
        <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
            <Header
                title="Welcome to 47 Club Creations" 
                styles={style.home__header}
            />
            
            
            <Button title="Check our latest merchandise"
            onPress={()=> navigation.navigate("Products")}
            />
        
        </View>
    )
}


const styles = StyleSheet.create({
    home__text:{
        flex:1,
        color:"red",
        fontSize:30,
        textAlign:"center"
    },
    home__header:{
        flex:1,
        color:"black",
        fontSize:30,
        textAlign:"center"
    }
    
})





export default Home

























