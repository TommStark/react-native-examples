import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>

                Counter
            </Text>
            <Text style={styles.title}>
                {counter}
            </Text>
            <Fab
                title="+1"
                onPress={ () => setCounter(counter + 1)}
            />
            <Fab
                title="-1"
                onPress={ () => setCounter(counter - 1)}
                position="bl"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:42,
    },
});

export default CounterScreen;
