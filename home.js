import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    
    <View style={styles.container}>

    <ScrollView>

      <Text style={styles.paragraph}>
      Pizzaria Plepleiton
      </Text>
      

      <View style={styles.cxfoto}>
      <Image style={styles.img} resizeMode="center" source={require("../assets/frango.jpg")} />
      <Text style={styles.subtitulo}> Pizza de frango</Text>
      <Text style={styles.descricao}></Text>
      <Text style={styles.valor}>R$ 29,96 (S/Borda recheada){('\n')}(R$36,49 (C/Borda recheada)</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("../assets/musarela.jpg")}/>
      <Text style={styles.subtitulo}>Pizza de Calabresa</Text>
      <Text style={styles.descricao}></Text>
      <Text style={styles.valor}>R$ 29,96 (S/Borda recheada){('\n')}(R$36,49 (C/Borda recheada)</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("../assets/pizza-de-queijo.jpg")}/>
      <Text style={styles.subtitulo}>Pizza de Queijo</Text>
      <Text style={styles.descricao}></Text>
      <Text style={styles.valor}>R$ 35,96 (S/Borda recheada){('\n')}(R$39,49 (C/Borda recheada)</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("../assets/pizza-mini-queijo.jpg")}/>
      <Text style={styles.subtitulo}>Mini Pizza de Queijo</Text>
      <Text style={styles.descricao}></Text>
      <Text style={styles.valor}>R$ 21,96 (C/Borda recheada)</Text>
      </View>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9FB8BE',
    padding: 8,
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 6,
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#ffff',
  },

  subtitulo:{
    fontSize:20,
    padding: 10,
    backgroundColor: '#5AF153',
    borderRadius: 20,
    margin: 10,
  },

  descricao:{
    padding: 14,
    margin: 3,
  },

  valor:{
    padding: 10,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#42EDB1',
    fontSize: 18,
  },

  img:{
    width: 230,
    height: 200,
    borderRadius: 2,
    padding: 10,
  },

  cxfoto:{
    flex:1,
    paddingTop: 10,
    margin: 10,
    backgroundColor: '#E8EDEE' ,
    alignItems:'center',
    borderRadius: 15,
    width: 360,
  }  
});