/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
import Constants from 'expo-constants';
//import rect in our project
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
//import all the components we will need
import Fondo from '../../assets/images/back2.png'
/*
Ventana de inicio, para el restaurante inteligente, se utilizó la estructura de código grid
del sitio web https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
dado por el profesor del curso de SOA, solo se muestra un icono para llevar a la aplicación
de parqueo, los otros campos no estan disponibles.
*/
export default class App extends Component {
  render() {
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.MainContainer}>
          <Text style={styles.title}>
            Bienvenido a{"\n"}Lotto Digital
          </Text>
          <Text style={styles.paragraph}>
            Jugar lotería, apuntando cierta cantidad de dinero a cualquier 
            juego disponible, realizando recargas digitales.
          </Text>
          <View style={styles.buttonMargin}>
            <Button
              title="EMPEZAR"
              color='#00000000'
              onPress={() => this.props.navigation.navigate('Ingresar')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }


}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    textShadowColor: 'rgba(24, 124, 188, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15,
    color: 'white',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'white',
    marginTop: 50
  },
  buttonMargin: {
    padding: 8,
    fontSize: 18,
    marginTop:10,
    fontWeight: 'bold',
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fffe4b',
  },
  imageBack:{
    
    width : '100%',
    height : '100%',
  },
  
});