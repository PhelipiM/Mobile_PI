import React from "react";
import { View, StyleSheet, ScrollView, Text, useState} from "react-native";
import { Navigation } from "@react-navigation/native";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { Button  } from "react-native-paper";


function BasicExample ({navigation}) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      numeric: "", 
      city:"",
    },
    mode: "onChange",
  });
  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Entrar </Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
                type: 'email',
                name: 'email',
  
                rules: {
                  required: {
                    value: true,
                    message: 'Email é necessário',
                  },
                },
                textInputProps: {
                  label: 'Email',
                },
              },
            {
                name: 'city',
                type: 'autocomplete',
                textInputProps: {
                  label: 'Cidade',
                },
                rules: {
                  required: {
                    value: true,
                    message: 'Cidade é necessário',
                  },
                },
                options: [
                  {
                    label: 'Joinville',
                    value: 1,
                  },
                  {
                    label: 'Araquari',
                    value: 2,
                  },
                  {
                    label: 'São Francisco do Sul',
                    value: 3,
                  },
                  {
                    label: 'Barra do Sul',
                    value: 4,
                  },
                  {
                    label: 'Jaraguá do Sul',
                    value: 5,
                  },
                  {
                    label: 'Blumenau',
                    value: 6,
                  },
                  {
                    label: 'Balneário Camburiú',
                    value: 7,
                  },
                  {
                    label: 'Florianoópolis',
                    value: 8,
                  },
                ],
              },
            {
              type: "password",
              name: "password",
              rules: {
                required: {
                  value: true,
                  message: "Senha é necessário",
                },
              },
              textInputProps: {
                label: "Senha",
              },
            },
          ]}
        />
        <Button style={styles.buttonforms}
          mode={"contained"}
          onPress={() => navigation.navigate('Main')}
        >
          Log In
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  headingStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  buttonforms: {
    backgroundColor: 'pink',                                                                  
  }
});

export default BasicExample;
