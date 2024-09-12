// FAQScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  const faqs = [
    {
      question: "Comment puis-je créer un compte ?",
      answer: "Vous pouvez créer un compte en cliquant sur 'S'inscrire' sur la page d'accueil et en remplissant les informations nécessaires."
    },
    {
      question: "Comment réinitialiser mon mot de passe ?",
      answer: "Pour réinitialiser votre mot de passe, allez dans 'Mot de passe oublié' sur la page de connexion et suivez les instructions."
    },
    {
      question: "Où puis-je trouver mes réservations ?",
      answer: "Vos réservations sont disponibles dans la section 'Mes Réservations' de votre profil."
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Questions Fréquemment Posées</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
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
  faqItem: {
    marginBottom: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    color: '#666',
  },
});

export default FAQScreen;
