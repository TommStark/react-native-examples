//Definir como luce , que informacion voy  grabar.

import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

//initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

//como luce el stado general
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

//context
export const AuthContext = createContext({} as AuthContextProps);

//
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavIcon, logOut, changeUserName}}>
      {children}
    </AuthContext.Provider>
  );
};
