import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Drawer from "../Screens/Drawer";
// import Tab from "./components/Tab"
// import Form from "./Screens/Form"

export default function Main() {
    return (
    <NavigationContainer>
      <Drawer/>
      {/* <Drawer /> */}
      {/* <Tab /> */}
    </NavigationContainer>
 )}