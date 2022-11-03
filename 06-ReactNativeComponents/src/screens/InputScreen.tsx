/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';
import {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

export const InputScreen = () => {
  const {onChange, form, isSubscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Inputs" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.border,
            }}
            placeholder="ingrese su telefono"
            keyboardType="phone-pad"
            autoCorrect={false}
            onChangeText={(text: string) => onChange(text, 'phone')}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.border,
            }}
            placeholder="ingrese su email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text: string) => onChange(text, 'email')}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...stylesScreen.switchText,
                color: colors.text,
                borderColor: colors.border,
              }}>
              Subscribe
            </Text>
            <CustomeSwitch
              isOn={isSubscribe}
              onChange={(isEnabled: boolean) =>
                onChange(isEnabled, 'isSubscribe')
              }
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 4)} />
          <HeaderTitle title={JSON.stringify(form, null, 4)} />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.border,
            }}
            placeholder="ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={(text: string) => onChange(text, 'name')}
          />
          <View style={{height: 150}} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
