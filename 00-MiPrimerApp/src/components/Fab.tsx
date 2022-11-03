import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

interface Props {
    title:string,
    position?:'br' | 'bl',
    onPress: () => void,
}

export const Fab = ({title, onPress, position = 'br'}:Props) => {


const android = () =>{
    return (
        <View
        style={[styles.fabLocation,
            position === 'bl'
            ? styles.left
            : styles.rigth,
        ]}
    >
        <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425B',false,30)}
    >
        <View
            style={styles.fabBtn}
        >
            <Text
            style={styles.fabText}
            >{title}</Text>
        </View>
    </TouchableNativeFeedback>
    </View>
    );
};

const ios = () => {
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.fabLocation,
            position === 'bl'
            ? styles.left
            : styles.rigth,
        ]}
    >
        <View
            style={styles.fabBtn}
        >
            <Text
            style={styles.fabText}
            >{title}</Text>
        </View>
    </TouchableOpacity>
    );
};



  return (
        (Platform.OS === 'android')
        ? android()
        : ios()
  );
};

const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:35,
    },
    rigth:{
        right:25,
    },
    left:{
        left:25,
    },
    fabBtn:{
        backgroundColor:'#5856D6',
        borderRadius:100,
        width:60,
        height:60,
        display:'flex',
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    fabText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',
    },
});

