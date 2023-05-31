// CategoryListScreen.js
import React, { useEffect, useState } from 'react';
import { Button, FlatList, View, Text, StyleSheet } from 'react-native';
import { fetchCategories, deleteCategory } from '../services/api';

export default function CategoryListScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadCategories);
    loadCategories();

    // Clean up: remove the listener when this component is destroyed
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (category_name) => {
    await deleteCategory(category_name);
    // Refresh the category list after a category is deleted
    await loadCategories();
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.category_name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.category_name}</Text>
            <Button title="Details" onPress={() => navigation.navigate('CategoryDetail', { category_name: item.category_name })} />
            <Button title="Delete" onPress={() => handleDelete(item.category_name)} />
          </View>
        )}
      />
      <Button title="Add Category" onPress={() => navigation.navigate('AddCategory')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
  },
  category: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
