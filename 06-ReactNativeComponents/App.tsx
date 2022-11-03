import 'react-native-gesture-handler';

import * as React from 'react';
import {StackNavigation} from './src/navigation/StackNavigation';
import {LogBox} from 'react-native';
import {ThemeProvider} from './src/context/theme/ThemeContext';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>
  );
};

export default App;
