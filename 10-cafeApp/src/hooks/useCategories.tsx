import {useEffect, useState} from 'react';
import cafeApi from '../api/cafeApi';
import {Categoria, CategoriesResponse} from '../interfaces/appInterfaces';

export const useCategories = () => {
  const [categories, setCategories] = useState<Categoria[]>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const resp = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategories(resp.data.categorias);
    setIsloading(false);
  };

  return {categories, isLoading};
};
