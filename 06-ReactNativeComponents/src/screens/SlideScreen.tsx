/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  SafeAreaView,
  ImageSourcePropType,
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useFade} from '../hooks/useFade';
import {Animated} from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlideScreen = () => {
  const {width} = useWindowDimensions();
  const [activeDot, setactiveDot] = useState(0);
  const {opacity, fadeIn} = useFade();
  const navigation = useNavigation();
  const IsVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          justifyContent: 'center',
          padding: 40,
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setactiveDot(index);
          if (index === 2) {
            fadeIn(500);
            IsVisible.current = true;
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeDot}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856D6',
          }}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            onPress={() => {
              IsVisible.current && navigation.navigate('Home' as any);
            }}
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              marginHorizontal: 20,
              alignItems: 'center',
              borderRadius: 10,
              width: 100,
              height: 40,
              backgroundColor: '#5856D6',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Enter
            </Text>
            <Icon name="chevron-forward-outline" size={25} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
