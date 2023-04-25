import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Drawer from "./components/Drawer";
import Tab from "./components/Tab"

import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      <Tab />
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  // titulo: {
  //   backgroundColor: '#FA497A',
  //   textAlign: 'center',
  //   padding: 15,
  //   color: 'white', 
  //   marginBottom: 160,
  //   ustifyContent: 'center', 
  //   alignItems: 'center', 
  // },
  drawer: {
    backgroundColor: "pink",
  },
})