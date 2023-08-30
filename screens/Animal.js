import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios'

const DetailComponent = (props) => (
  <View style={styles.container}>
    <Card >
     <Card.Cover style={styles.card} source={{uri: props.animal.foto}} />
       <Card.Content>
         <Text>{props.animal.nome}</Text>
         <Text>{props.animal.raca.nome}</Text>
         
       </Card.Content>
      
     </Card>
       </View>
     );

function DetailAnimal({route, navigation}) {
  
  const { id } = route.params  

  const [animal, setAnimal] = useState({
    foto: '',
    nome: '',
    raca:''
  });

  
  useEffect(() => {
    axios.get(`http://191.52.55.58:19003/animais/${id}`)
    .then(response => {
      setAnimal(response.data)      
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <Text>itemId: {JSON.stringify(id)}</Text>
    <View style={styles.container}>
      <View style={styles.conteudo}>
      <DetailComponent animal={animal} key={animal.id} navigation={navigation}/>
       {/* { filtrados.map(animal => <DetailComponent animal={animal} key={animal.id} navigation={navigation}/>)} */}
      </View>
   </View>
   </ScrollView>
  );
}


 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  card: {
    width: 250,
    height: 280,
    padding: 0,
  },
  ScrollView: {
    marginHorizontal: 0,
  },

});

export default DetailAnimal;