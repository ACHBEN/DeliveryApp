// CategoryListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
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
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (category_name) => {
    await deleteCategory(category_name);
    await loadCategories();
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.category_name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('CategoryDetail', { category_name: item.category_name })}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{item.category_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AddCategory')}>
        <Text style={styles.buttonText}>Ajouter une catégorie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F8F8F8',
  },
  listItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'center',
  },
  listItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#34A853',
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
