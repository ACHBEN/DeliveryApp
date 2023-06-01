// EditDeliverymanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { fetchDeliveryman, updateDeliveryman } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function EditDeliverymanScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [recruitment_date, setRecruitmentDate] = useState('');
  const [Num_tel, setNumTel] = useState('');
  const [category_name, setCategoryName] = useState('');
  
  // Ici on récupère coursier_id au lieu de id
  const { coursier_id } = route.params;

  useEffect(() => {
    async function loadDeliveryman() {
      const deliveryman = await fetchDeliveryman(coursier_id);
        setName(deliveryman.name || '');
        setAdress(deliveryman.adress || '');
        setRecruitmentDate(deliveryman.recruitment_date || '');
        setNumTel(deliveryman.Num_tel || '');
        setCategoryName(deliveryman.category_name || '');
    }

    loadDeliveryman();
  }, [coursier_id]); // on utilise ici coursier_id

  const handleUpdate = async () => {
    const updatedDeliveryman = { 
      name: name,
      adress: adress,
      recruitment_date: recruitment_date,
      Num_tel: Num_tel,
      category_name: category_name
    };
  
    console.log('Contenu du corps envoyé :', updatedDeliveryman);
    console.log('Route vers laquelle il est envoyé :', `DeliverymanDetail?id=${coursier_id}`);
    console.log('Route de l\'API :', `/api/deliveryman/${coursier_id}`);
  
    await updateDeliveryman(coursier_id, updatedDeliveryman);
    navigation.navigate('DeliverymanDetail', { id: coursier_id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le coursier</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom du coursier"
      />
      <TextInput
        style={styles.input}
        value={adress}
        onChangeText={setAdress}
        placeholder="Adresse"
      />
      <TextInput
        style={styles.input}
        value={recruitment_date}
        onChangeText={setRecruitmentDate}
        placeholder="Date de recrutement"
      />
      <TextInput
        style={styles.input}
        value={Num_tel}
        onChangeText={setNumTel}
        placeholder="Numéro de téléphone"
      />
      <TextInput
        style={styles.input}
        value={category_name}
        onChangeText={setCategoryName}
        placeholder="Catégorie"
      />
      <Button title="Enregistrer" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
