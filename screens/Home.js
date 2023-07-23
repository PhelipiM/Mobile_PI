import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Drawer from "../components/Drawer";

function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        style={styles.logo}
        source={require('../assets/pi.png')}
      />
      <Drawer></Drawer>
      </View>
    );
  }

export default Home

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'stretch',
    width: '50%',
    height: 100,
  },
})