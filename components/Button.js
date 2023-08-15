import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";




const MyComponent = ({ navigation }) => {
  return (
        <Button
          style={styles.buttonforms}
          mode={"contained"}
          onPress={() => navigation.navigate("DetailAnimal")}
        >
          Ver +
        </Button>
  )}

export default MyComponent;

const styles = StyleSheet.create({
  buttonforms: {
    backgroundColor: "#F7559A",
  },
});

