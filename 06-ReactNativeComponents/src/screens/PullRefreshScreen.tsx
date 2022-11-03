import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [data, setData] = useState<string>('');

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('termino de refrescar');
      setRefreshing(false);
      setData('Tu vieja');
    }, 3200);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={30}
          progressBackgroundColor="#5856D6"
          colors={['white', 'orange', 'red']}
          tintColor="#5856D6"
          title="refreshing"
          titleColor="#5856D6"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};
