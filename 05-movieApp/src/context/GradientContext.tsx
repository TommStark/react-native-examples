import React from 'react';
import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colores: ImageColors) => void;
  setPrevMainColors: (colores: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //TODO define Type;

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colores: ImageColors) => {
    setColors(colores);
  };

  const setPrevMainColors = (colores: ImageColors) => {
    setPrevColors(colores);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevColors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
