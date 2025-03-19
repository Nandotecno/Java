import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TextInput style={styles.input} placeholder='Digite o nome'/>
      <TextInput style={styles.input} placeholder='Digite o ano de nascimento'/>
      <TextInput style={styles.input} placeholder='Digite a altura'/>
      <Button title='Calcular' style={styles.botao}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:
  {
    height:40,
    width:'80%',
    borderWidth: 1,
    borderRadius:5,
    padding:10,
    margin:10,
  },
  botao:
  {
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },

});

