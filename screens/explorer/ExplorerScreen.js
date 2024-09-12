// ExplorerScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ExplorerScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explorer</Text>
      <Text style={styles.subtitle}>Découvrez des destinations incroyables et des activités passionnantes.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Destinations Européennes</Text>
        <Text style={styles.cardText}>Explorez les cultures, les monuments et les attractions de l'Europe.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explorer Europe</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Destinations Asiatiques</Text>
        <Text style={styles.cardText}>Découvrez la diversité et la beauté de l'Asie.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explorer Asie</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Aventures en Amérique</Text>
        <Text style={styles.cardText}>Vivez des aventures inoubliables à travers les Amériques.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explorer Amérique</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
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

export default ExplorerScreen;
