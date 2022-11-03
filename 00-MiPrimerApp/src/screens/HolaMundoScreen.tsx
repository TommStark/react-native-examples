/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
return (
    <View style={{
    flex:1,
    justifyContent:'center',
    }}>
    <Text style={{fontSize:42, textAlign:'center'}}>
        Hola Mundo
    </Text>
    </View>
);
};

export default App;
