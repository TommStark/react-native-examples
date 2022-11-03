import {useRef, useState} from 'react';

enum Operators {
  sum,
  rest,
  mult,
  div,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('100');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const btnDel = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const buildNumber = (textNumber: string) => {
    //double point
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      //decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        //if its cero and includes .
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        //if it diff from cero and does not have a .
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        //avoid 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const toogleNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const updatePrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDiv = () => {
    updatePrevNumber();
    lastOperation.current = Operators.div;
  };
  const btnMult = () => {
    updatePrevNumber();
    lastOperation.current = Operators.mult;
  };
  const btnSum = () => {
    updatePrevNumber();
    lastOperation.current = Operators.sum;
  };
  const btnRest = () => {
    updatePrevNumber();
    lastOperation.current = Operators.rest;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.rest:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.mult:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.div:
        if (num2 === 0 || num1 === 0) {
          break;
        }
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };

  return {
    prevNumber,
    number,
    clean,
    btnDel,
    btnDiv,
    btnMult,
    btnRest,
    btnSum,
    calc,
    buildNumber,
    toogleNegative,
  };
};
