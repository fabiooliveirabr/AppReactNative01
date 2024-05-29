import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>    
      <StatusBar style="auto" />
        <View style={estilos.cxConteudo1}>
          <Text style={estilos.titulos}>
            Conteúdo 1
          </Text>
        </View>

        <View style={estilos.container2}>
          <View style={estilos.cxConteudo2}>
              <Text style={estilos.titulos}>
                Conteúdo 2
              </Text>
          </View>

          <View style={estilos.cxConteudo3}>
               <Text style={estilos.titulos}>
                Conteúdo 3
              </Text>
          </View>
        </View> 

        <View style={estilos.cxConteudo4}>
          <Text style={estilos.titulos}>Conteúdo 4</Text>
        </View>
        <View style={estilos.cxConteudo5}>
          <Text style={estilos.titulos}>Conteúdo 5</Text>
        </View>
        <View style={estilos.cxConteudo6}>
          <Text style={estilos.titulos2}>Conteúdo 6</Text>
        </View>

        <View style={estilos.container3}>
          <View style={estilos.cxConteudo7}>
             <Text style={estilos.titulos}>Conteúdo 7</Text>
          </View>
          <View style={estilos.cxConteudo8}>
              <Text style={estilos.titulos}>Conteúdo 8</Text>
          </View>
          <View style={estilos.cxConteudo9}>
              <Text style={estilos.titulos}>Conteúdo 9</Text>
          </View>
        </View>

        <View style={estilos.container4}>
          <View style={estilos.cxConteudo10}>
            <Text style={estilos.titulos2}>Conteudo 10</Text>
          </View>
          <View style={{width:"50%"}}>
            <View style={estilos.cxConteudo11}>
              <Text style={estilos.titulos}>Conteúdo 11</Text>
            </View>
            <View style={estilos.cxConteudo12}>
              <Text style={estilos.titulos}>Conteúdo 12</Text>
            </View>
          </View>
        </View>

    </View>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  cxConteudo1:{
    backgroundColor: "#9c1894",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  titulos:{
    fontSize: 25,
    color: "#98d8f4",
    fontWeight: '700'
  },
  container2:{
    width: "100%",
    height: "15%",
    flexDirection: "row"
  },
  cxConteudo2:{
    backgroundColor: "#d43a3a",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo3:{
    backgroundColor: "#1c52c0",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo4:{
    backgroundColor: "#136008",
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center"
  },

  cxConteudo5:{
    backgroundColor: "#d43a3a",
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center"
  },

  cxConteudo6:{
    backgroundColor: "#dce81c",
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  titulos2:{
    fontSize: 25,
    color: "#375968",
    fontWeight: '700'
  },

  container3:{
    width: "100%",
    height: "15%",
    flexDirection: "row"
  },
  cxConteudo7:{
    backgroundColor: "#1c52c0",
    height: "100%",
    width: "33%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo8:{
    backgroundColor: "#9c1894",
    height: "100%",
    width: "34%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo9:{
    backgroundColor: "#ff9000",
    height: "100%",
    width: "33%",
    justifyContent: "center",
    alignItems: "center"
  },
  container4:{
    height: "15%",
    width: "100%",
    flexDirection: "row"
  },
  cxConteudo10:{
    backgroundColor: "#dce81c",
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo11:{
    backgroundColor: "#1c52c0",
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cxConteudo12:{
    backgroundColor: "#136008",
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
