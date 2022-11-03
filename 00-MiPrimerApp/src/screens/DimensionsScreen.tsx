import React from 'react';
import { Text , View, StyleSheet, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {

  const {width,height} = useWindowDimensions();
  return (
  <View>
    <View style={styles.container}>
        <View style={styles.orangeBox}/>
        <View style={{...styles.violetBox, width:width * 0.5}}/>
    </View>
    <Text style={styles.title}> W:{width} H:{height}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:200,
    backgroundColor:'red',
  },
  violetBox:{
    backgroundColor:'#5856D6',
    width:'50%',
    height:'50%',
  },
  orangeBox:{
    backgroundColor:'#F0A23B',
  },
  title:{
    fontSize: 30,
    textAlign:'center',
  },
});
