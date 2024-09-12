// Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const Footer = () => {
  const navigation = useNavigation(); // Utilisez useNavigation

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Search')} // Navigation vers la page de recherche
      >
        <Icon name="search" color="#1e90ff" size={24} />
        <Text style={styles.navText}>Rechercher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Explore')} // Navigation vers la page Explorer
      >
        <Icon name="compass" color="#1e90ff" size={24} />
        <Text style={styles.navText}>Explorer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Travel')} // Navigation vers la page Voyages
      >
        <Icon name="globe" color="#1e90ff" size={24} />
        <Text style={styles.navText}>Voyages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Support')} // Navigation vers la page Support
      >
        <Icon name="comments" color="#1e90ff" size={24} />
        <Text style={styles.navText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#1e90ff',
  },
});

export default Footer;
