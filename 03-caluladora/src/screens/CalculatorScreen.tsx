import React from 'react';
import {Text, View} from 'react-native';
import {CircularBoton} from '../components/CircularBoton';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && <Text style={styles.resultMin}>{prevNumber}</Text>}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* btn-row */}
      <View style={styles.row}>
        <CircularBoton text="C" color="#9B9B9B" action={clean} />
        <CircularBoton text="+/-" color="#9B9B9B" action={toogleNegative} />
        <CircularBoton text="del" color="#9B9B9B" action={btnDel} />
        <CircularBoton text="/" color="#FF9427" action={btnDiv} />
      </View>

      {/* btn-row */}
      <View style={styles.row}>
        <CircularBoton text="7" action={buildNumber} />
        <CircularBoton text="8" action={buildNumber} />
        <CircularBoton text="9" action={buildNumber} />
        <CircularBoton text="x" color="#FF9427" action={btnMult} />
      </View>

      {/* btn-row */}
      <View style={styles.row}>
        <CircularBoton text="4" action={buildNumber} />
        <CircularBoton text="5" action={buildNumber} />
        <CircularBoton text="6" action={buildNumber} />
        <CircularBoton text="-" color="#FF9427" action={btnRest} />
      </View>

      {/* btn-row */}
      <View style={styles.row}>
        <CircularBoton text="1" action={buildNumber} />
        <CircularBoton text="2" action={buildNumber} />
        <CircularBoton text="3" action={buildNumber} />
        <CircularBoton text="+" color="#FF9427" action={btnSum} />
      </View>

      {/* btn-row */}
      <View style={styles.row}>
        <CircularBoton text="0" ancho action={buildNumber} />
        <CircularBoton text="." action={buildNumber} />
        <CircularBoton text="=" color="#FF9427" action={calc} />
      </View>
    </View>
  );
};
