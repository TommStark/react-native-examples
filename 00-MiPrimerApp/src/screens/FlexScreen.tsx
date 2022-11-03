import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
        <Text style={styles.box1}>caja 4</Text>
        <Text style={styles.box2}>caja 2</Text>
        <Text style={styles.box3}>caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28C4D9',
        flex:1,
        alignItems:'flex-start',
        flexWrap:'wrap'
    },
    box1:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
    },
    box2:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
    },
    box3:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
    },
});
