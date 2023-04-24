import React from 'react';
import { View, Text } from 'react-native';

function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         {/* <Image 
        source={require ('./assets/pi.png')}
      /> */}
        <Text>Home Screen</Text>
      </View>
    );
  }

export default Home