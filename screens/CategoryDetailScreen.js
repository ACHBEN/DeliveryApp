// CategoryDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchCategory, deleteCategory } from '../services/api';

export default function CategoryDetailScreen({ route, navigation }) {
  const { category_name } = route.params;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function loadCategory() {
      const data = await fetchCategory(category_name);
      setCategory(data);
    }

    loadCategory();
  }, [category_name]);

  const handleDelete = async () => {
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de vouloir supprimer cette catégorie ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            await deleteCategory(category_name);
            navigation.goBack();
          },
        },
      ]
    );
  };

  if (!category) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{category.category_name}</Text>
        <Text style={styles.descriptionText}>{category.description}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleDelete}>
        <Text style={styles.buttonText}>Supprimer la catégorie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#555',
    lineHeight: 24,
  },
  buttonContainer: {
    backgroundColor: '#f44336',
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});