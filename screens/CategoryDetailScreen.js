// CategoryDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    await deleteCategory(category_name);
    navigation.goBack();
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
    paddingTop: 50,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
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
  },
  buttonContainer: {
    backgroundColor: '#f44336', // On utilise une couleur différente pour mettre en évidence le bouton de suppression
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
