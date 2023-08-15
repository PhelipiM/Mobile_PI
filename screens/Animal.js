import React from 'react';
import 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function DetailAnimal() {
  return (
    <View style={styles.container}>


  <Card >
  <Card.Cover style={styles.card} source={{ uri: 'https://fotos.amomeupet.org/uploads/fotos/1659137978_62e46fbb0a1c3_hd.jpg' }} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
    </Card.Content>
    
  </Card>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 250,
    height: 280,
    borderRadius: 0,
  },

});

