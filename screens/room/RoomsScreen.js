// RoomsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoomsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails des Chambres</Text>
      {/* Ajoutez ici le contenu que vous souhaitez afficher */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RoomsScreen;
