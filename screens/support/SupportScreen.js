// SupportScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SupportScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.subtitle}>Nous sommes là pour vous aider</Text>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('FAQ')}
        >
          <Icon name="question-circle" color="#1e90ff" size={30} />
          <Text style={styles.cardText}>FAQ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Contact')}
        >
          <Icon name="envelope" color="#1e90ff" size={30} />
          <Text style={styles.cardText}>Contactez-nous</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Feedback')}
        >
          <Icon name="comment" color="#1e90ff" size={30} />
          <Text style={styles.cardText}>Retour d'information</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
});

export default SupportScreen;
