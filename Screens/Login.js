import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";

const MyComponent = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Image style={styles.logo} source={require("../assets/pi.png")} />
        <Text style={styles.headingStyle}>Entrar </Text>
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value={text}
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          placeholder="amigosdejoinville@gmail.com"
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          mode="outlined"
          value={text}
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          placeholder="*******"
          onChangeText={(text) => setText(text)}
        />
        <Button
          style={styles.buttonforms}
          mode={"contained"}
          onPress={() => navigation.navigate("Main")}
        >
          Log In
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
    justifyContent: "center",
  },
  headingStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: "#F7559A",
  },
  form: {
    activeOutlineColor: "#F7559A",
  },
  buttonforms: {
    backgroundColor: "#F7559A",
  },
  input: {
    align: "center",
    margin: 10,
  },
  logo: {
    resizeMode: "stretch",
    width: "100%",
    height: 150,
    paddingTop: 0,
  },
});

export default MyComponent;
