import { useState, useEffect, useCallback } from 'react';
import authHeader from '../services/auth-header'
import axios from 'axios';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    console.log("In getroducts : useFetch")
    // const response = await fetch(url);
    // const products = await response.json();
    const response = axios.get(url, {headers: authHeader()});
    console.log((await response).data);
    const products = (await response).data;
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};