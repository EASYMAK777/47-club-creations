import React from 'react'
import { View, } from 'react-native'


function Home() {
    return (
        <View>
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
    
})




export default Home

