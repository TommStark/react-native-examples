import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28425B',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
    },
    box2:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        position:'absolute',
        right:0,
    },
    box3:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
    },
});
