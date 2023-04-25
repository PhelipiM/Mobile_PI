import "react-native-gesture-handler";
import { View, Text, StyleSheet } from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Screens/Home";
import Cachorros from "../Screens/Cachorros";
import Gatos from "../Screens/Gatos";
import Passaros from "../Screens/Passaros";
import Perfil from "../Screens/Perfil";
import Form from "../Screens/Form";


const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        style={styles.drawer}
        name="Home"
        icon=""
        component={Home}
        options={{ drawerLabel: "Home", drawerActiveTintColor: "pink" }}
      />
      <Drawer.Screen
        name="Cachorros"
        component={Cachorros}
        options={{ drawerLabel: "Cachorros", drawerActiveTintColor: "pink" }}
      />
      <Drawer.Screen
        name="Gatos"
        icon="folder"
        component={Gatos}
        options={{ drawerLabel: "Gatos", drawerActiveTintColor: "pink" }}
      />
      <Drawer.Screen
        name="Passaros"
        component={Passaros}
        options={{ drawerLabel: "Passaros", drawerActiveTintColor: "pink" }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{ drawerLabel: "Perfil", drawerActiveTintColor: "pink" }}
      />
      <Drawer.Screen
        style={styles.drawer}
        name="Form"
        icon=""
        component={Form}
        options={{ drawerLabel: "Form", drawerActiveTintColor: "pink" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <MyDrawer />
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