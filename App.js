import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView, 
  StatusBar,
  Image
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  // Estados
  const [textoInput, setTextoInput] = useState(''); // Campo de entrada
  const [listaItens, setListaItens] = useState([]); // Lista de compras (começa vazia)
  const [hamster, setHamster] = useState(false);

  const adicionarItem = () => {
    setHamster(false);
    if (textoInput.trim() === '') {
      return; // Se estiver vazio, não faz nada
    }
    const novoItem = {
      id: Date.now().toString(),
      nome: textoInput
    };
    // Coloca o novo item no topo da lista
    setListaItens([novoItem, ...listaItens]);
    setTextoInput('');
  };

  const removerItem = (idParaRemover) => {
    // Cria uma lista nova omitindo o item a ser removido
    const novaLista = listaItens.filter((item) => item.id !== idParaRemover);
    setListaItens(novaLista);
  };

  // Renderizador de itens
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTexto}>{item.nome}</Text>
      <TouchableOpacity style={styles.botaoRemover} onPress={() => removerItem(item.id)}>
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
          value={textoInput}
          onChangeText={setTextoInput}
          onSubmitEditing={adicionarItem}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      {listaItens.length === 0 ? (
        <View style={styles.listaVazia}>
          <TouchableOpacity onPress={() => setHamster(!hamster)}>
            {hamster ? (
              <Image 
              source={{ uri: 'https://media.tenor.com/SP05MWh2XroAAAAi/hamostor.gif' }} 
              style={{ width: 150, height: 150 }} 
            />
      ) : (
        <MaterialIcons name="remove-shopping-cart" size={64} color="#ccc" />
      )}
          </TouchableOpacity>
    <Text style={styles.textoVazio}>
      {hamster ? "Hello World" : "Sua lista está vazia!"}
    </Text>
  </View>
      ) : (
        <FlatList
          data={listaItens}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.lista}
        />
      )}
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
    paddingTop: 40, // Espaço pra barra de status
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
    elevation: 2,
    shadowColor: '#000',
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
  },
  listaVazia: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textoVazio: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  }
});