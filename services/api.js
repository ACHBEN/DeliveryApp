// api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = 'http://192.168.1.7:3000/api';

export async function fetchOrders() {
  try {
    const response = await fetch(`${API_URL}/orders/list`);
    const data = await response.json();
    
    // Vous pouvez ajouter un console.log ici pour voir si les données sont bien reçues
    console.log('Data received:', data);
    
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}


export async function fetchOrder(id) {
  const response = await axios.get(`${API_URL}/orders/find/${id}`);
  return response.data;
}

export async function addOrder(order) {
  await axios.post(`${API_URL}/orders`, order);
}

export async function updateOrder(id, order) {
  try {
    await axios.put(`${API_URL}/orders/${id}`, order);
  } catch (error) {
    console.error('Error updating order:', error);
  }
}


export async function deleteOrder(id) {
  await axios.delete(`${API_URL}/orders/${id}`);
}

export async function fetchDeliverymen() {
  const response = await axios.get(`${API_URL}/coursiers/list`);
  return response.data;
}

export async function fetchDeliveryman(id) {
  const response = await axios.get(`${API_URL}/coursiers/find/${id}`);
  return response.data;
}

export async function addDeliveryman(deliveryman) {
  await axios.post(`${API_URL}/coursiers`, deliveryman);
}

export async function updateDeliveryman(id, deliveryman) {
  try{
    
  await axios.put(`${API_URL}/coursiers/${id}`, deliveryman);
  }
  catch{
    console.error('Error updating deliveryman:', error);
  }
}

export async function deleteDeliveryman(id) {
  await axios.delete(`${API_URL}/coursiers/${id}`);
}
export async function fetchCategories() {
  const response = await axios.get(`${API_URL}/categories/list`);
  return response.data;
}

export async function fetchCategory(category_name) {
  const response = await axios.get(`${API_URL}/categories/${category_name}`);
  return response.data;
}

export async function deleteCategory(category_name) {
  await axios.delete(`${API_URL}/categories/${category_name}`);
}

export async function addCategory(category) {
  const response = await axios.post(`${API_URL}/categories`, category);
  return response.data;
}

export async function registerUser(user) {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
  }
}

export async function loginUser(login, password) {
  try {
    const checkResponse = await axios.post(`${API_URL}/check/`, { login: login, password: password });
    console.log('Response from /check/:', checkResponse);

    if (checkResponse.data === null) {
      console.error('Invalid credentials');
      return false;
    }

    const loginResponse = await axios.post(`${API_URL}/login`, { login: login, password: password });
    console.log('Response from /login:', loginResponse);

    if (loginResponse.data && loginResponse.data.token) {
      await AsyncStorage.setItem('token', loginResponse.data.token);
      await AsyncStorage.setItem('tokenMaxAge', (Date.now() + loginResponse.data.maxAge).toString());
      return true;
    } else {
      console.error('Failed to log in:', loginResponse);
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error);
    return false;
  }
}
