import React from 'react';
// import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Avatar, Title } from 'react-native-paper';
import Icon from '@mdi/react';
import { mdiTagHeartOutline } from '@mdi/js';


const LeftContent = props => <Avatar.Icon {...props} path={mdiTagHeartOutline} size={1}/>


const MyComponent = (props) => (
  <Card style={styles.card}>
    <Card.Title title={props.animal.titulo} subtitle={props.animal.raca} left={LeftContent} />
    
    <Card.Cover
      source={{uri: props.animal.capa}}
      style={styles.animal} 
/>
    <Card.Actions style={styles.button}>
      <Button buttonColor='#F7559A' theme={{ colors: { primary: 'white' } }}>Favoritar</Button>

    </Card.Actions>
  </Card>
);


export default function ListaAnimais({route}) {
  const { categoria } = route.params
  const animais = [
    {
      id: 1,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340740165_169432112307756_6623547955058731944_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=UY7hwyZmz1cAX-BKYiB&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCxiNYIjh-JqJ3nZMLaOPSUe3FNTu_p486d7MH4qQuGuA&oe=643B612F', 
      titulo: 'cachorro 1', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 2,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340370472_967892837916293_7554605164774467525_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=LW_mQZj70_AAX-4buVf&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCy8QvEXYyBoHAZ4vCcXSGrRhlPFP3HpYgzpPa-mLSNfw&oe=643AF310', 
      titulo: 'cachorro 2', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 3,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340843731_651730683348722_2902739099548439531_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=UGI1juid06EAX9i32i7&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAyM5MgEt6XuD7sYUXnM6u8zbvE3pGU8Yo-LcQz8R4yVw&oe=643B7089', 
      titulo: 'cachorro 3', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 4,
      capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/330312749_1608049732955953_3611604033603449070_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=WgwyvGB0nNQAX-PdSIj&_nc_ht=scontent.ffln5-1.fna&oh=00_AfBWh_p6018Rb--F65rNrkI_ps6gKd-OzRcMicA_mrsnkg&oe=643B1441', 
      titulo: 'cachorro 6', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 5,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340911657_3139098442902369_9121773017653055421_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=EjIg7jMVhgsAX8qoXvR&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCPydj1E81-2sv077Nhs8rkI36l5htvD2NVDG-dy64l-Q&oe=643B6D29', 
      titulo: 'cachorro 4', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 6,
      capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/330344566_687320559810100_8286644969173811214_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=QYde0PBbTdcAX8X62fg&_nc_oc=AQlNUpjxJnQcFOn0NOYi4LP57nyhPgsbUdGud0pMl6eFebHLCsjvUmdUczGpRVXvtnA&_nc_ht=scontent.ffln5-1.fna&oh=00_AfC_EFxqJ5lfOZc9t6zXEzrQS7kpm3E4EXuIyCD1-q1geQ&oe=643B0B3D', 
      titulo: 'cachorro 11', 
      raca: "SRD",
      categoria: 'cachorro'
    },
    {
      id: 7,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336298408_1256610938280604_6823901807552778216_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=u-h5bkUsfm0AX-4MftI&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAWYGyZDV2Yzb1yhe7vLuTk0n99K-sLyV5ihWJTnWzXBA&oe=643B045B', 
      titulo: 'gato 1', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 8,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336466921_6839825759377886_936111419670464960_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=dZeCYjGaTC8AX81oI3l&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAcdJza5F7IKdDvYHkPTAa8IgnA9o0MzOiLhh1jz1GJWQ&oe=643ACAE0', 
      titulo: 'gato 2', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 9,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340520449_1272106266707933_2235407936349527719_n.jpg?stp=c0.41.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=pAKKLoO6sv8AX8ZBjsE&_nc_ht=scontent.ffln5-1.fna&oh=00_AfDgJDjAJ4NCWf0YTCj_Q7qQtm7kRPqXzOeMenOiVIt-xw&oe=643B4091', 
      titulo: 'gato 3', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 10,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/336264533_736820331416093_1536152329994091864_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=U_m0x_yvB7wAX9PbKem&_nc_ht=scontent.ffln5-1.fna&oh=00_AfD6mGVRBm4JIjDYDhhFJCpdQrhebN_Sv9Hvid0OOnCWIw&oe=643BBA0A', 
      titulo: 'gato 4', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 11,
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/339446215_166346589668148_1793074008812218857_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=5lPiALjKBlgAX9DLujQ&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAG8QVbVuRJfJ8X8oEiGNn9ZToTuRnCGiszFXkB9Girbw&oe=643C7E08', 
      titulo: 'gato 5', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 12,
      capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/339573912_597673739071094_1813614911247133434_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=rpSLbTzMqPEAX-ogNWK&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCg08WW8KiIVNf2U0u17M_Em-5rRb7t4OWRZvI7QOiSWw&oe=643B22F0', 
      titulo: 'gato 5', 
      raca: "SRD",
      categoria: 'gato'
    },
    {
      id: 13,
      capa: 'https://clubedascalopsitas.com.br/uploads/monthly_2018_02/calopsita_perola.thumb.JPG.b87e079af4f16e3a6c5ae00d551cb39c.JPG', 
      titulo: 'calopsita 1', 
      raca: "SRD",
      categoria:'passaro'
    },
    {
      id: 14,
      capa: 'https://3.bp.blogspot.com/-Gof4Tho5Dv0/UaTQ-DG9pbI/AAAAAAAAE2E/XE_RFYHYcdo/s300-c/8.jpg', 
      titulo: 'calopsita 2', 
      raca: "SRD",
      categoria:'passaro'
    },
    {
      id: 15,
      capa: 'https://2.bp.blogspot.com/-kX4WKSRZoSY/UaTRshHIgvI/AAAAAAAAE2k/FJdQQ75xOww/s300-c/12.jpg', 
      titulo: 'calopsita 3', 
      raca: "SRD",
      categoria:'passaro'
    },
    {
      id: 16,
      capa:'https://3.bp.blogspot.com/-wnJqVSLHaeQ/UaTRPsVl9PI/AAAAAAAAE2M/8Wz52-143Yg/s300-c/9.jpg', 
      titulo: 'calopsita 6', 
      raca: "SRD",
      categoria:'passaro'
    },
    {
      id: 17,
      capa: 'https://3.bp.blogspot.com/-g9YDQxB0aSU/UaTV6F7EOXI/AAAAAAAAE5g/_v4iMcYgX7g/s300-c/35.jpg', 
      titulo: 'calopsita 4', 
      raca: "SRD",
      categoria:'passaro'
    },
    {
      id: 18,
      capa:'https://1.bp.blogspot.com/-6VUYeyEAPQI/UaTTH7WeYUI/AAAAAAAAE3g/6AmFAkyMDyo/s300-c/19.jpg', 
      titulo: 'calopsita 11', 
      raca: "SRD",
      categoria:'passaro'
    },
  ]
  
  const filtrados = animais.filter(animal => animal.categoria === categoria)

  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
        <Text style={styles.texto}> Se encante e adote!</Text>
      <View style={styles.conteudo}>
       { filtrados.map(animal => <MyComponent animal={animal} key={animal.id}/>)}
      </View>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center',

  },
  texto:{
    fontSize: 25,
     textAlign:'center'
  },
  conteudo: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    marginLeft: 75,
  },
  card: {
    width: '70%',
    heigth: 51,
    borderRadius: 0,
    margin: 19,
    padding: 10,
    backgroundColor: 'white',
  },
  animal: {
    resizeMode: 'stretch',
    width: '100%',
    height: 225,
  },
  ScrollView: {
    marginHorizontal: 0,
  },
  button: {
    marginRight: 0,
    buttonColor: 'pink',
  },
  buttoncard: {
    marginRight: 0,
    buttonColor: 'pink',
  },
});


