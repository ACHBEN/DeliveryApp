// CategoryListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchCategories, deleteCategory } from '../services/api';
import { AntDesign } from '@expo/vector-icons';

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

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('CategoryDetail', { category_name: item.category_name })}
    >
      <Text style={styles.listItemText}>{item.category_name}</Text>
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>Aucune catégorie disponible.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.category_name}
        renderItem={renderCategoryItem}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCategory')}
      >
        <AntDesign name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listItem: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  listItemText: {
    fontSize: 18,
    textAlign: 'center',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyListText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#34A853',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});