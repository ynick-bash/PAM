import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  
  const [focaAtiva, setFocaAtiva] = useState(true);


  const imgFoca = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMrnU4OvAgVZ3H1dZHDKckBOrmqzovu5UpHa_10llekkYF652i2cT1H2eNKwN6USAlzP6jW0drHDRBn09RPdLiDWmPBnxuURCxl9mgho&s=10'; 
  const imgOutro = 'https://medias.revistaoeste.com/qa-staging/wp-content/uploads/2023/12/luccas-neto-banheira-de-nutella-tvpop.jpg'; 

  return (
    <View style={styles.container}>

      <Text style={styles.h1}>Não confie nele!</Text>

      <Card style={styles.card}>
        <TouchableOpacity onPress={() => setFocaAtiva(!focaAtiva)}>
          <Image 
            source={{ uri: focaAtiva ? imgFoca : imgOutro }} 
            style={styles.image} 
          />
        </TouchableOpacity>
      </Card>

      <Text style={styles.paragraph}>
        {focaAtiva ? "Cuidado, ele pode ser uma foca..." : "Ele sempre foi uma foca."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  card: {
    padding: 10,
    borderRadius: 20,
    elevation: 5
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
  }
});