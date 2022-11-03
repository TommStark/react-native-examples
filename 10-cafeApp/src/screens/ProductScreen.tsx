/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ProductsStackParams} from '../navigator/ProductsNavigator';
import {Picker} from '@react-native-picker/picker';
import {useCategories} from '../hooks/useCategories';
import {useForm} from '../hooks/useForm';
import {ProductsContext} from '../context/ProductContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id = '', name = ''} = route.params;
  const {loadProductById, updateProduct, addProduct, uploadImage} =
    useContext(ProductsContext);
  const {categories} = useCategories();
  const [tempUri, setTempUri] = useState('');
  const {_id, categoriaId, nombre, img, onChange, setFormValue} = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    navigation.setOptions({
      title: nombre ? nombre : 'product',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) {
      return;
    }
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };

  const saveOrUpdate = async () => {
    if (id.length > 0) {
      console.log('update');
      updateProduct(categoriaId, nombre, id);
    } else {
      const tempCategoriaId = categoriaId || categories![0]._id;
      const newProduct = await addProduct(tempCategoriaId, nombre);
      console.log('newProduct: ', newProduct);

      onChange(newProduct._id, '_id');
    }
  };

  const takePhoto = () => {
    launchCamera({mediaType: 'photo', quality: 0.5}, resp => {
      if (resp.didCancel) {
        return;
      }
      if (!resp.assets![0].uri) {
        return;
      }
      setTempUri(resp.assets![0].uri);
      uploadImage(resp, id);
    });
  };

  const takeFromGallery = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.5}, resp => {
      if (resp.didCancel) {
        return;
      }
      if (!resp.assets![0].uri) {
        return;
      }
      setTempUri(resp.assets![0].uri);
      uploadImage(resp, id);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Product Name : </Text>
        <TextInput
          style={styles.textInput}
          placeholder="product"
          value={nombre}
          onChangeText={v => {
            onChange(v, 'nombre');
          }}
        />

        {/* PICKERR */}
        <Text style={styles.label}>Category : </Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={itemValue => onChange(itemValue, 'categoriaId')}>
          {categories?.map(c => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
          ))}
        </Picker>
        <Button
          color="#5856D6"
          title={'save'}
          onPress={saveOrUpdate}
          disabled={!nombre}
        />
        {_id.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Button color="#5856D6" title={'Camera'} onPress={takePhoto} />
            <Button
              color="#5856D6"
              title={'Gallery'}
              onPress={takeFromGallery}
            />
          </View>
        )}
        {img.length > 0 && !tempUri && (
          <Image
            source={{uri: img}}
            style={{width: '100%', height: 300, marginTop: 20}}
          />
        )}
        {tempUri && (
          <Image
            source={{uri: tempUri}}
            style={{width: '100%', height: 300, marginTop: 20}}
          />
        )}
        {/* <Text>{JSON.stringify(form, null, 5)}</Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginVertical: 10,
  },
});
