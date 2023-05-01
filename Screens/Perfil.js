import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, List, Card, IconButton } from "react-native-paper";

function Perfil() {
  return (
    <View style={{ align:"center", padding: 50, paddingTop: 150}}>
      <Text style={styles.perfil}>Amanda de Souza Tavares</Text>

      <Avatar.Image
        style={styles.profile}
        size={100}
        source={require("../assets/profile.png")}
      />
      <Card.Title
        title="Meus dados pessoais"
        subtitle="Veja aqui"
        left={(props) => <Avatar.Icon {...props} style={{ backgroundColor:"#F7559A" }}icon="folder" />}
      />
      <Card.Title
        title="Minhas doações"
        subtitle="Veja aqui"
        left={(props) => <Avatar.Icon {...props} style={{ backgroundColor:"#F7559A" }} icon="folder" />}   
      />
      <Card.Title
        title="Minhas publicações"
        subtitle="Veja aqui"
        left={(props) => <Avatar.Icon {...props} style={{ backgroundColor:"#F7559A" }} icon="folder" />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  perfil: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    fontSize: 18,
  },
  profile: {
    alignSelf: "center",
    fontSize: 18,
  },
  list: {},
});

export default Perfil;
