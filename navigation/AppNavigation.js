import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home/HomeScreen';
import Header from '../screens/home/Header';
import Footer from '../screens/home/Footer';
import RoomsScreen from '../screens/room/RoomsScreen';
import SupportScreen from '../screens/support/SupportScreen';
import FAQScreen from '../screens/support/FAQScreen';
import ContactScreen from '../screens/support/ContactScreen';
import FeedbackScreen from '../screens/support/FeedbackScreen';
import TravelScreen from '../screens/voyage/TravelScreen';
import ExplorerScreen from '../screens/explorer/ExplorerScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Rooms" component={RoomsScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Explore" component={ExplorerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
