import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  // Dados mock
  const dadosIniciais = [
    { id: '1', nome: 'Arroz 5kg' },
    { id: '2', nome: 'Feijão Preto' },
    { id: '3', nome: 'Leite' }
  ];

  // Renderizador de itens
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTexto}>{item.nome}</Text>
      <TouchableOpacity style={styles.botaoRemover}>
        <MaterialIcons name="delete" size={24} color="#f44336" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <MaterialIcons name="shopping-cart" size={32} color="#fff" />
        <Text style={styles.titulo}>Superlista</Text>
      </View>

      {/* Área de input e botão adicionar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo produto..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.botaoAdicionar}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={dadosIniciais}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 40, // Espaço da barra de status
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    elevation: 2, // Sombra no android
    shadowColor: '#000', // Sombra no web/iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  botaoAdicionar: {
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 2,
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
  },
  botaoRemover: {
    padding: 5,
  }
});