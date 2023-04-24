import React from 'react';
// import { Card } from 'react-native-paper';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

function Gatos(props) {
  return (
    <Card style={styles.card}>
    <Card.Content>
    <Image
        source={{uri: props.gato.capa}}
        style={styles.gato}
      />
      <Text style={{ color: 'darked' }}> {props.gato.titulo}</Text>
      <Text style={{ fontSize: 12 }}> {props.gato.raca}</Text>
    </Card.Content>
    </Card>
  );
}

export default function App() {
    const gatos = [
      {
        capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336298408_1256610938280604_6823901807552778216_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=u-h5bkUsfm0AX-4MftI&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAWYGyZDV2Yzb1yhe7vLuTk0n99K-sLyV5ihWJTnWzXBA&oe=643B045B', 
        titulo: 'cachorro 1', 
        raca: "SRD"
      },
      {
        capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336466921_6839825759377886_936111419670464960_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=dZeCYjGaTC8AX81oI3l&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAcdJza5F7IKdDvYHkPTAa8IgnA9o0MzOiLhh1jz1GJWQ&oe=643ACAE0', 
        titulo: 'cachorro 2', 
        raca: "SRD"
      },
      {
        capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340520449_1272106266707933_2235407936349527719_n.jpg?stp=c0.41.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=pAKKLoO6sv8AX8ZBjsE&_nc_ht=scontent.ffln5-1.fna&oh=00_AfDgJDjAJ4NCWf0YTCj_Q7qQtm7kRPqXzOeMenOiVIt-xw&oe=643B4091', 
        titulo: 'cachorro 3', 
        raca: "SRD"
      },
      {
        capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336264533_736820331416093_1536152329994091864_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=U_m0x_yvB7wAX9PbKem&_nc_ht=scontent.ffln5-1.fna&oh=00_AfD6mGVRBm4JIjDYDhhFJCpdQrhebN_Sv9Hvid0OOnCWIw&oe=643BBA0A', 
        titulo: 'cachorro 4', 
        raca: "SRD"
      },
      {
        capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/339446215_166346589668148_1793074008812218857_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=5lPiALjKBlgAX9DLujQ&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAG8QVbVuRJfJ8X8oEiGNn9ZToTuRnCGiszFXkB9Girbw&oe=643C7E08', 
        titulo: 'cachorro 5', 
        raca: "SRD"
      },
      {
        capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/339573912_597673739071094_1813614911247133434_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=rpSLbTzMqPEAX-ogNWK&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCg08WW8KiIVNf2U0u17M_Em-5rRb7t4OWRZvI7QOiSWw&oe=643B22F0', 
        titulo: 'cachorro 5', 
        raca: "SRD"
      },
      
    ]
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeigth: 'bold', textAlign:'center' }}> Se encante, e adote</Text>
        <View style={styles.conteudo}>
         { gatos.map(gato => <Gatos gato={gato} />)}
        </View>
     </View>
     </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffff',
      paddingTop: 20,
    },
    conteudo: {
      flex: 1,
      backgroundColor: '#ffff',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    card: {
      backgroundColor: 'pink',
      width: '40%',
      heigth: 515,
      borderRadius: 10,
      margin: 19,
    },
    gato: {
      resizeMode: 'stretch',
      width: '100%',
      height: 200,
    },
    ScrollView: {
      marginHorizontal: 0,
    },
  });