import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#28425B' }}>
      {/* <HolaMundoScreen/> */}
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionsScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  );
};

export default App;
