import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";





const MyComponent = ({ navigation, animal, id }) => {
  const navigateToDetail = () => {
    navigation.navigate("DetailAnimal", {
      id: id,
    });
  };

  return (
    <Button
      style={styles.buttonforms}
      mode="contained"
      onPress={navigateToDetail}
    >
      Ver +
    </Button>
  );
};
export default MyComponent;

const styles = StyleSheet.create({
  buttonforms: {
    backgroundColor: "#F7559A",
  },
});

