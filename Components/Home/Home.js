import React from 'react'
import { View, } from 'react-native'
import Header from '../Header/Header'


function Home() {
    return (
        <View>
            <Header/>
            <Text styles={style.home__text}>
                Welcome to 47 Club Creations
            </Text>
            <Button title="Press to continue" />
        
        </View>
    )
}

const styles = StyleSheet.create({
    home__text:{
        flex:1
    },
    
})




export default Home

