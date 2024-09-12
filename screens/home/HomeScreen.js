// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Header from './Header'; // Assurez-vous que le chemin est correct
import Footer from './Footer'; // Assurez-vous que le chemin est correct
import Icon from 'react-native-vector-icons/FontAwesome';
import Rooms from '../../components/rooms/Rooms'; // Assurez-vous que le chemin est correct
import Cars from '../../components/cars/Cars'; // Assurez-vous que le chemin est correct
import BusTickets from '../../components/tickets/BusTickets'; // Assurez-vous que le chemin est correct

const HomeScreen = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Buttons for Different Options */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={[styles.iconButton, activeSection === 'rooms' && styles.activeButton]}
          onPress={() => handleSectionChange('rooms')}
        >
          <Icon name="bed" color={activeSection === 'rooms' ? '#FFA500' : '#fff'} size={24} />
          <Text style={[styles.iconText, activeSection === 'rooms' && styles.activeText]}>
            Chambres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, activeSection === 'cars' && styles.activeButton]}
          onPress={() => handleSectionChange('cars')}
        >
          <Icon name="car" color={activeSection === 'cars' ? '#FFA500' : '#fff'} size={24} />
          <Text style={[styles.iconText, activeSection === 'cars' && styles.activeText]}>
            Voitures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, activeSection === 'bus' && styles.activeButton]}
          onPress={() => handleSectionChange('bus')}
        >
          <Icon name="bus" color={activeSection === 'bus' ? '#FFA500' : '#fff'} size={24} />
          <Text style={[styles.iconText, activeSection === 'bus' && styles.activeText]}>
            Tickets de Bus
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" color="#888" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher"
          placeholderTextColor="#888"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Default Content */}
        {activeSection === null && (
          <View style={styles.defaultContentContainer}>
            <Text style={styles.defaultContentTitle}>Bienvenue</Text>
            <Text style={styles.defaultContentText}>
              Sélectionnez une option pour voir les tendances et offres.
            </Text>
          </View>
        )}

        {/* Section for Trending Rooms */}
        {activeSection === 'rooms' && (
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Chambres en tendance</Text>
            <Text style={styles.tipsSubtitle}>Découvrez les hébergements populaires</Text>
            <Rooms searchQuery={searchQuery} /> 
          </View>
        )}

        {/* Section for Trending Cars */}
        {activeSection === 'cars' && (
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Voitures en tendance</Text>
            <Text style={styles.tipsSubtitle}>Découvrez les meilleures offres de location</Text>
            <Cars searchQuery={searchQuery} /> 
          </View>
        )}

        {/* Section for Bus Tickets */}
        {activeSection === 'bus' && (
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Tickets de Bus</Text>
            <Text style={styles.tipsSubtitle}>Voyagez avec les meilleures offres de bus</Text>
            <BusTickets searchQuery={searchQuery} /> 
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContent: {
    padding: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 12,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
  },
  iconText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFA500',
  },
  activeText: {
    color: '#FFA500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    paddingVertical: 12,
  },
  defaultContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  defaultContentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  defaultContentText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  tipsContainer: {
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tipsSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});

export default HomeScreen;
