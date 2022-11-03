/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {WhiteLogo} from '../components/WhiteLogo';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';
import {loginStyle} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {name, email, password, onChange} = useForm({
    email: '',
    password: '',
    name: '',
  });

  const {signUp, errorMessage, removeError} = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('Login incorrecto', errorMessage, [
      {text: 'Ok', onPress: removeError},
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const onRegister = () => {
    Keyboard.dismiss();
    signUp({correo: email, password, nombre: name});
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#5856d6',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyle.formContainer}>
          <WhiteLogo />
          <Text style={loginStyle.title}>Register</Text>

          <Text style={loginStyle.label}>Name:</Text>
          <TextInput
            placeholder="Ingrese su nombre:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyle.inputField,
              Platform.OS === 'ios' && loginStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onRegister}
          />

          <Text style={loginStyle.label}>Email:</Text>
          <TextInput
            placeholder="Ingrese su email:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyle.inputField,
              Platform.OS === 'ios' && loginStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}
          />

          <Text style={loginStyle.label}>Password:</Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              loginStyle.inputField,
              Platform.OS === 'ios' && loginStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}
          />

          {/* Button Login */}
          <View style={loginStyle.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyle.button}
              onPress={onRegister}>
              <Text style={loginStyle.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          {/* back to login */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('HomeScreen')}
            style={loginStyle.buttonReturn}>
            <Text style={loginStyle.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
