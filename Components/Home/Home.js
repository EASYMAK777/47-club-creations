import React from 'react'
import { View, } from 'react-native'
import Header from '../Header/Header'


function Home() {
    return (
        <View>
            <Header

                title="Welcome to 47 Club Creations" 
                styles={style.home__header}
            />
            <Text styles={style.home__text}>

                title="Welcome to 47 Club Creactions!!"
                    
            />
            
            <Text >

                Welcome to 47 Club Creations
            </Text>
            <Button title="Press to continue" onPress={() =>5} />
        
        </View>
    )
}


const styles = StyleSheet.create({
    home__text:{
        flex:1,
        color:"#fff",
        fontSize:30,
        textAlign:"center"
    },
    home__header:{
        flex:1
    }
    
})





export default Home

