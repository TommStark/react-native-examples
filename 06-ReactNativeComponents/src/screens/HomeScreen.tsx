/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {DATA} from '../data/MenuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};
