import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from '../api/cafeApi';
import {
  LoginResponse,
  Usuario,
  LoginData,
  RegisterData,
} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (RegisterData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  errorMessage: '',
  user: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      return dispatch({type: 'notAuthenticated'});
    }
    cafeApi
      .get<LoginResponse>('/auth')
      .then(async resp => {
        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
          type: 'signUp',
          payload: {token: resp.data.token, user: resp.data.usuario},
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'notAuthenticated'});
      });
  };

  const signUp = ({nombre, correo, password}: RegisterData) => {
    cafeApi
      .post<LoginResponse>('/usuarios', {nombre, correo, password})
      .then(async resp => {
        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
          type: 'signUp',
          payload: {token: resp.data.token, user: resp.data.usuario},
        });
      })
      .catch(err => {
        dispatch({
          type: 'addError',
          payload: err.response.data.msg || 'El correo ya esta registrado',
        });
      });
  };
  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {token: data.token, user: data.usuario},
      });

      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error?.response?.data?.msg || 'Revise la informacion ',
      });
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
