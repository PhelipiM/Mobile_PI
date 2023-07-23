import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Drawer from "./components/Drawer";
// import Tab from "./components/Tab"

import Main from "./screens/Main";
import Login from "./screens/Login"

import { ScrollView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown:false}} style={{ color: "pink" }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "pink",
  },
})