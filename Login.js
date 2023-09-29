import { useState, useEffect } from 'react';

import { 
  Text, 
  SafeAreaView, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity 
  } from 'react-native';

import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


  function dados(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }


function Login()
{
  Firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode, errorMessage);
  })
}

useEffect (() => {
  Firebase.auth().onAuthStateChanged(function(user){setUser(user);
    if(initializing)setInitializing(false);
    {
      // alert("Ok");
    }
  });
},[])

if(user){
  return navigation.navigate('Home');
}
else{
  // alert("Não permitido");
  // console.log('não tá legal');
}


  return (
    <SafeAreaView style={estilos.container}>
    <Image source={require('../assets/pizza.jpg')} style={estilos.logo} />

      <Text style={estilos.textoentrada}> Pizzaria do Simone's </Text>

      <TextInput 
      placeholderTextColor={'#fff'}
      style={estilos.textoinput}
      placeholder="Digite o email"
      onChangeText={(email) => setEmail(email)}
      value={email}
      />

      <TextInput
      secureTextEntry={true} 
      placeholderTextColor={'#fff'}
      style={estilos.textoinput}
      placeholder="Digite a senha Secreta"
      onChangeText={(senha) => setSenha(senha)}
      value={senha}
      />

      <TouchableOpacity
      style={estilos.botao}
      onPress={() => {
      Login();
      }}>  
      <Text style={estilos.textobotao}>Acessar</Text>
      
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textoinput: {
    width:250,
    paddingLeft:10,
    backgroundColor:'#000',
    color:'#fff',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  logo:
  {
    width:200,
    height:200,
    borderRadius:150,
  },
  textoentrada:
  {
    marginTop:55,
    marginBottom:35,
    fontSize:25,
    color:'#4b0082',
    fontWeight:'bold',
    paddingVertical:14,
  },
  botao:
  {
    width:200,
    backgroundColor:'#00008b',
    height:40,
    marginTop:35,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
  },
  textobotao:
  {
    fontSize:30,
    color:'#fff5ee',
    fontWeight:'bold',
  },
});