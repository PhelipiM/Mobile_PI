import React from 'react';
// import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

function Cachorros(props) {
  return (
    <Card style={styles.card}>
    <Card.Content>
    <Card.Cover
        source={{uri: props.cachorro.capa}}
        style={styles.cachorro}
      />
      <Text style={styles.textocard}> {props.cachorro.titulo}</Text>
      <Text style={styles.textocard}> {props.cachorro.raca}</Text>
    </Card.Content>
    </Card>
  );
}

export default function App() {
  const cachorros = [
    {
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340740165_169432112307756_6623547955058731944_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=UY7hwyZmz1cAX-BKYiB&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCxiNYIjh-JqJ3nZMLaOPSUe3FNTu_p486d7MH4qQuGuA&oe=643B612F', 
      titulo: 'cachorro 1', 
      raca: "SRD"
    },
    {
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340370472_967892837916293_7554605164774467525_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=LW_mQZj70_AAX-4buVf&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCy8QvEXYyBoHAZ4vCcXSGrRhlPFP3HpYgzpPa-mLSNfw&oe=643AF310', 
      titulo: 'cachorro 2', 
      raca: "SRD"
    },
    {
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340843731_651730683348722_2902739099548439531_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=UGI1juid06EAX9i32i7&_nc_ht=scontent.ffln5-1.fna&oh=00_AfAyM5MgEt6XuD7sYUXnM6u8zbvE3pGU8Yo-LcQz8R4yVw&oe=643B7089', 
      titulo: 'cachorro 3', 
      raca: "SRD"
    },
    {
      capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/330312749_1608049732955953_3611604033603449070_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=WgwyvGB0nNQAX-PdSIj&_nc_ht=scontent.ffln5-1.fna&oh=00_AfBWh_p6018Rb--F65rNrkI_ps6gKd-OzRcMicA_mrsnkg&oe=643B1441', 
      titulo: 'cachorro 6', 
      raca: "SRD"
    },
    {
      capa: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/340911657_3139098442902369_9121773017653055421_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=EjIg7jMVhgsAX8qoXvR&_nc_ht=scontent.ffln5-1.fna&oh=00_AfCPydj1E81-2sv077Nhs8rkI36l5htvD2NVDG-dy64l-Q&oe=643B6D29', 
      titulo: 'cachorro 4', 
      raca: "SRD"
    },
    {
      capa:'https://scontent.ffln5-1.fna.fbcdn.net/v/t39.30808-6/330344566_687320559810100_8286644969173811214_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=QYde0PBbTdcAX8X62fg&_nc_oc=AQlNUpjxJnQcFOn0NOYi4LP57nyhPgsbUdGud0pMl6eFebHLCsjvUmdUczGpRVXvtnA&_nc_ht=scontent.ffln5-1.fna&oh=00_AfC_EFxqJ5lfOZc9t6zXEzrQS7kpm3E4EXuIyCD1-q1geQ&oe=643B0B3D', 
      titulo: 'cachorro 11', 
      raca: "SRD"
    },
    
  ]
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.texto}> Se encante e adote!</Text>
      <View style={styles.conteudo}>
       { cachorros.map(cachorro => <Cachorros cachorro={cachorro} />)}
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
  },
  texto:{
    fontSize: 20,
     textAlign:'center'
  },
  textocard: {
    color: 'black',
    fontSize: 15,
  },
  conteudo: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: 'pink',
    width: '40%',
    heigth: 51,
    borderRadius: 10,
    margin: 19,
  },
  cachorro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
  ScrollView: {
    marginHorizontal: 0,
  },
});


// import React from 'react';
// import { View, Text } from 'react-native';

// function Cachorros() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Cachorros Screen</Text>
//       </View>
//     );
//   }

// export default Cachorros