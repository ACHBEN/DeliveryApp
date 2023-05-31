// MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './screens/LoginScreen';
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

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="OrderList" component={OrderListScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
      <Stack.Screen name="EditOrder" component={EditOrderScreen} />
      <Stack.Screen name="DeliverymanList" component={DeliverymanListScreen} />
      <Stack.Screen name="DeliverymanDetail" component={DeliverymanDetailScreen} />
      <Stack.Screen name="AddDeliveryman" component={AddDeliverymanScreen} />
      <Stack.Screen name="EditDeliveryman" component={EditDeliverymanScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />

    </Stack.Navigator>
  );
}
