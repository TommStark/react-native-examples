import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'light_theme'} | {type: 'dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#5856D1',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'rgba(0,0,0,0.3)',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.3)',
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: false,
  colors: {
    primary: '#5856D1',
    background: 'black',
    card: 'balck',
    text: 'white',
    border: 'rgba(255,255,255,0.5)',
    notification: 'teal',
  },
  dividerColor: 'rgba(255,255,255,0.5)',
};

export const ThemeReducer = (state: ThemeState, action: ThemeAction): any => {
  switch (action.type) {
    case 'light_theme':
      return {...lightTheme};
    case 'dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
