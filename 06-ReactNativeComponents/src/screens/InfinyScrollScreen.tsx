/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState, useContext} from 'react';
import {FadeInImage} from '../components/FadeInImage';
import {ThemeContext} from '../context/theme/ThemeContext';

export const InfinyScrollScreen = () => {
  const [data, setData] = useState([0, 1, 2, 3, 4]);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: string) => {
    return (
      <View>
        <FadeInImage
          uri={`https://picsum.photos/id/${item}/500/300`}
          style={{width: '100%', height: 400}}
        />
      </View>
    );
  };

  const loadMore = () => {
    let newArr: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArr[index] = data.length + index;
    }

    setTimeout(() => {
      setData([...data, ...newArr]);
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item?.toString()}
        renderItem={({item}) => renderItem(item?.toString())}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="infinite scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
