import React, { useContext } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
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
import SuperHomePage from '../screens/SuperHomePage';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('tokenMaxAge');

      setIsAuthenticated(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="SuperHomePage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3F51B5',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="SuperHomePage"
        component={SuperHomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="AddOrder"
        component={AddOrderScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="EditOrder"
        component={EditOrderScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="DeliverymanList"
        component={DeliverymanListScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="DeliverymanDetail"
        component={DeliverymanDetailScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="AddDeliveryman"
        component={AddDeliverymanScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="EditDeliveryman"
        component={EditDeliverymanScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryListScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                />
              </View>
            ),
        }}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategoryScreen}
        options={{
          headerRight: () =>
            isAuthenticated && (
              <View style={styles.headerButton}>
                <Button
                  title="Logout"
                  onPress={handleLogout}
                  color="#0e1225"
                  
                />
              </View>
            ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 10,
  },
});
