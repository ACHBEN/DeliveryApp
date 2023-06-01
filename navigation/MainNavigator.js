// MainNavigator.js
import React, { useContext } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Importation de useNavigation
import HomeScreen from '../screens/HomeScreen';
import OrderListScreen from '../screens/OrderListScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import AddOrderScreen from '../screens/AddOrderScreen';
import EditOrderScreen from '../screens/EditOrderScreen';
import DeliverymanListScreen from '../screens/DeliverymanListScreen';
import DeliverymanDetailScreen from '../screens/DeliverymanDetailScreen';
import AddDeliverymanScreen from '../screens/AddDeliverymanScreen';
import EditDeliverymanScreen from '../screens/EditDeliverymanScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AuthContext from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigation = useNavigation(); // Utilisation de useNavigation pour obtenir l'objet de navigation

  const handleLogout = async () => {
    try {
      // Réinitialise les valeurs du token et de la date d'expiration dans AsyncStorage
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('tokenMaxAge');

      setIsAuthenticated(false);
      navigation.navigate('Login'); // Utilise navigation.navigate pour rediriger vers la page de connexion
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="OrderList" component={OrderListScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="EditOrder" component={EditOrderScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="DeliverymanList" component={DeliverymanListScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="DeliverymanDetail" component={DeliverymanDetailScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="AddDeliveryman" component={AddDeliverymanScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="EditDeliveryman" component={EditDeliverymanScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
      <Stack.Screen name="AddCategory" component={AddCategoryScreen} options={{ headerRight: () => (isAuthenticated && <Button title="Logout" onPress={handleLogout} />)}} />
    </Stack.Navigator>
  );
}
