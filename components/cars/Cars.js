// Cars.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Cars = ({ searchQuery = '' }) => { // Default to empty string if searchQuery is undefined
  // Sample data
  const cars = [
    { id: '1', title: 'Voiture Economique', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Voiture Luxe', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Voiture SUV', image: 'https://via.placeholder.com/150' },
    // Add more cars here
  ];

  // Filter cars based on searchQuery
  const filteredCars = cars.filter(car =>
    car.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FlatList
      data={filteredCars}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      numColumns={2} // Display two items per row
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
  },
  title: {
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default Cars;
