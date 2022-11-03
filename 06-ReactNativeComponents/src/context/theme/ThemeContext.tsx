import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {lightTheme, ThemeReducer, ThemeState, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    ThemeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  console.log('colorScheme: ', colorScheme);

  const setDarkTheme = () => {
    dispatch({type: 'dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'light_theme'});
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
