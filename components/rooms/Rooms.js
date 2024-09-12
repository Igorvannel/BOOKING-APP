// Rooms.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Rooms = ({ searchQuery = '' }) => { // Default to empty string if searchQuery is undefined
  // Sample data
  const rooms = [
    { id: '1', title: 'Chambre Simple', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Chambre Double', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Suite Deluxe', image: 'https://via.placeholder.com/150' },
    // Add more rooms here
  ];

  // Filter rooms based on searchQuery
  const filteredRooms = rooms.filter(room =>
    room.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FlatList
      data={filteredRooms}
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

export default Rooms;
