import React from 'react';
// import { Card } from 'react-native-paper';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

function Calopsitas(props) {
  return (
    <Card style={styles.card}>
    <Card.Content>
    <Image
        source={{uri: props.calopsita.capa}}
        style={styles.calopsita}
      />
      <Text style={{ color: 'darked' }}> {props.calopsita.titulo}</Text>
      <Text style={{ fontSize: 12 }}> {props.calopsita.raca}</Text>
    </Card.Content>
    </Card>
  );
}

export default function App() {
    const calopsitas = [
      {
        capa: 'https://clubedascalopsitas.com.br/uploads/monthly_2018_02/calopsita_perola.thumb.JPG.b87e079af4f16e3a6c5ae00d551cb39c.JPG', 
        titulo: 'calopsita 1', 
        raca: "SRD"
      },
      {
        capa: 'https://3.bp.blogspot.com/-Gof4Tho5Dv0/UaTQ-DG9pbI/AAAAAAAAE2E/XE_RFYHYcdo/s300-c/8.jpg', 
        titulo: 'calopsita 2', 
        raca: "SRD"
      },
      {
        capa: 'https://2.bp.blogspot.com/-kX4WKSRZoSY/UaTRshHIgvI/AAAAAAAAE2k/FJdQQ75xOww/s300-c/12.jpg', 
        titulo: 'calopsita 3', 
        raca: "SRD"
      },
      {
        capa:'https://3.bp.blogspot.com/-wnJqVSLHaeQ/UaTRPsVl9PI/AAAAAAAAE2M/8Wz52-143Yg/s300-c/9.jpg', 
        titulo: 'calopsita 6', 
        raca: "SRD"
      },
      {
        capa: 'https://3.bp.blogspot.com/-g9YDQxB0aSU/UaTV6F7EOXI/AAAAAAAAE5g/_v4iMcYgX7g/s300-c/35.jpg', 
        titulo: 'calopsita 4', 
        raca: "SRD"
      },
      {
        capa:'https://1.bp.blogspot.com/-6VUYeyEAPQI/UaTTH7WeYUI/AAAAAAAAE3g/6AmFAkyMDyo/s300-c/19.jpg', 
        titulo: 'calopsita 11', 
        raca: "SRD"
      },
      
    ]
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={{ fontSize: 19, fontWeigth: 'bold', textAlign:'center' }}>Se encante e adote!</Text>
        <View style={styles.conteudo}>
         { calopsitas.map(calopsita => <Calopsitas calopsita={calopsita} />)}
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
      margin: 15
    },
    calopsita: {
      resizeMode: 'stretch',
      width: '100%',
      height: 200,
    },
    ScrollView: {
      marginHorizontal: 0,
    },
  });