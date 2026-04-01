import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/EU.png')} style={styles.photo} />
        <Text style={styles.name}>Nicollas Roger Rocha Mello</Text>
        <Text style={styles.title}>Desenvolvedor Iniciante</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <Text>Email: nicollasroger6210@email.com</Text>
          <Text>Telefone: (13) 99687-8494</Text>
          <Text>Cidade: Itanhaém - Rua alipio simões savoy 2</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text>
            Sou um estudante focado em tecnologia, atualmente aprendendo HTML,
            CSS e C#. Busco minha primeira oportunidade para desenvolver minhas
            habilidades porque back-end dá muito dinheiro.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência</Text>
          <Text>
            - Ainda sem experiência profissional (apenas na franquia souls)
          </Text>
          <Text>- Projetos pessoais em programação (tipo esse)</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
          <Text>Ensino Médio - Em andamento (Etec)</Text>
          <Text>
            Conhecido como "o mais genial da turma" (segundo eu mesmo)
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text>- HTML</Text>
          <Text>- CSS</Text>
          <Text>- C# (básico)</Text>
          <Text>- VS Code</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}> Professor </Text>
          <Text>
            - O que eu aprendi fazendo essa atividade, foi bem legal estudar
            para fazer tudo isso aprendi a mexer no CSS a criar os cards mexer
            com cores (não utilizei para profissionalizar o curriculo.) aprendi
            a colocar scrollview e uma organização mediana. - MÉTODO DE ESTUDO -
            Chatgpt e videos no Youtube
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f5',
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
  },

  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    fontSize: 16,
    color: '#666',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  section: {},

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
