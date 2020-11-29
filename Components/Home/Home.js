import React from 'react'
import { View, } from 'react-native'
import Header from '../Header/Header'


function Home() {
    return (
        <View>
            <Header
                title="Welcome to 47 Club Creactions!!"
                    
            />
            
            <Text >
                Welcome to 47 Club Creations
            </Text>
            <Button title="Press to continue" onPress={() =>5} />
        
        </View>
    )
}





export default Home

