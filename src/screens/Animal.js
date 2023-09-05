import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const DetailComponent = (props) => (
  <View style={styles.container}>
      <Card.Cover style={styles.card} source={{ uri: props.animal.foto }} />
      <Card style={styles.detail}>
      <Card.Content>
        <Text variant="titleLarge">{props.animal.nome}</Text>
        <Text variant="bodyMedium">{props.animal.raca.nome}</Text>
      </Card.Content>
    </Card>
  </View>
);

function DetailAnimal({ route, navigation }) {
  const { id } = route.params;

  const [animal, setAnimal] = useState({
    foto: "",
    nome: "",
    raca: "",
  });

  useEffect(() => {
    axios.get(`http://192.168.0.173:19003/animais/${id}`).then((response) => {
      setAnimal(response.data);
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <View style={styles.container}>
        <View style={styles.conteudo}>
          <DetailComponent
            animal={animal}
            key={animal.id}
            navigation={navigation}
          />
          {/* { filtrados.map(animal => <DetailComponent animal={animal} key={animal.id} navigation={navigation}/>)} */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "25%",
  },
  card: {
    width: 250,
    height: 280,
    padding: 0,
  },
  detail: {
    padding: 20,
    marginTop: 30,
    marginBottom: 100,
    backgroundColor: "white",
  },
  ScrollView: {
    marginHorizontal: 0,
  },
});

export default DetailAnimal;
