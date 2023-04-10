import React,{useState}from 'react';
import { View, Text, TextInput, Button, Alert } from'react-native'; 

export default function App() { 

const [endereco, setEndereco] = useState(null); 
const [campocep, setCep] = useState(null); 

//Função usando fetch para pegar informações da API de CEP
const getCep = (cep) => { 
const endpoint = `http://viacep.com.br/ws/${cep}/json/`; //usamos crase para possibilidar colocar a variavel na URL

fetch(endpoint)       
  .then(resposta=>resposta.json())       
  .then(json=> { 
  const endereco = {  //constante para guardarmos as informações do retorno da API

  logradouro:json.logradouro,        
  }; 
  console.log(endereco);  
  setEndereco(endereco);      
  })       
  .catch(() => { 
  Alert.alert('Erro', 'Não foi possível carregar os dados do CEP');  
     });  
  }
  return (

  <View style={{ backgroundColor: 'green' }}>   
   <Button title="Rogerio"/>
   <Button title="Digite o cep que queira consultar:"/>
  <TextInput
  onChangeText={setCep}
  />
  {endereco != null && ( //conferindo se endereco está null, assim evitamos renderizar o componente sem ter nada e dar erro
  <Text>Rua: {endereco.logradouro}</Text>   
   )}
   
  <Button title="Consultar CEP"onPress={() =>getCep(campocep)}/>
  </View>

  );
 }
