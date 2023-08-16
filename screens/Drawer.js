import "react-native-gesture-handler";
import { View, Text, StyleSheet } from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import ListaAnimais from "../screens/ListAnimais";
import Perfil from "../screens/Perfil";



const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        style={styles.drawer}
        name="Home"
        icon=""
        component={Home}
        options={{ drawerLabel: "Amigos de Joinville", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Cachorros"
        component={ListaAnimais}
        initialParams={{categoria: 'Cachorro'}}
        options={{ drawerLabel: "Cachorros", drawerActiveTintColor: "#F7559A" }}
        />
      <Drawer.Screen
        name="Gatos"
        icon="folder"
        component={ListaAnimais}
        initialParams={{categoria: 'Gato'}}
        options={{ drawerLabel: "Gatos", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Passaros"
        component={ListaAnimais}
        initialParams={{categoria: 'passaro'}}
        options={{ drawerLabel: "Passaros", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{ drawerLabel: "Perfil", drawerActiveTintColor: "#F7559A" }}
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