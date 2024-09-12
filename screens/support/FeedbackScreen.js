// FeedbackScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Logique pour envoyer le feedback
    Alert.alert("Merci pour votre retour", "Nous avons reçu votre feedback et nous l'apprécions.");
    // Vous pouvez ajouter ici la logique pour envoyer le feedback à un serveur
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vos Retours</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Écrivez votre feedback ici..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
