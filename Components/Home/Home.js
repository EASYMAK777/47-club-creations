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
                Welcome to 47 Club Creations
            </Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    home__text:{
        flex:1
    },
    home__header:{
        flex:1
    }
    
})




export default Home

