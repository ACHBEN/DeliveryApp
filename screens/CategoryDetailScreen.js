// CategoryDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchCategory } from '../services/api'; // Assurez-vous d'implémenter cette fonction dans votre fichier api

export default function CategoryDetailScreen({ route }) {
  const { category_name } = route.params;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function loadCategory() {
      const data = await fetchCategory(category_name);
      setCategory(data);
    }

    loadCategory();
  }, [category_name]);

  if (!category) {
    return null;
  }

  return (
    <View>
      <Text>{category.category_name}</Text>
      <Text>{category.description}</Text>
    </View>
  );
}

