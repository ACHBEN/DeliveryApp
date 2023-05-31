// MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderListScreen from '../screens/OrderListScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';

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
    </Stack.Navigator>
  );
}

