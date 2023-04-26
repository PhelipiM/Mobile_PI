import React from 'react';
import { View, Text } from 'react-native';
// import Drawer from "./components/Drawer";
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         {/* <Image 
        source={require ('./assets/pi.png')}
      /> */}
        <Drawer /> 
        <Text>Home Screen</Text>
      </View>
    );
  }

export default Home