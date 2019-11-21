import React from 'react';
import {Button,View,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana home de la aplicación donde el usuario puede realizar las acciones (ver perfil,jugar y recarga)
*/
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textU: '',textP: ''};
  }

  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>

          <View style={styles.buttonMargin}>
            <Button
              title="Juegos"
              color='#00000000'
              onPress={() => this.props.navigation.navigate('Juego')}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              title="Cartera Digital"
              color='#00000000'
              onPress={() => this.props.navigation.navigate('Cartera')}
            />
          </View>
            <View style={styles.buttonMargin}>
              <Button
                title="Perfil Usuario"
                color='#00000000'
                onPress={() => this.props.navigation.navigate('Usuario')}
              />
            </View>
          </View>
        </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  textInput:{
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
    color: '#a7f6fd',
    backgroundColor: 'rgba(23, 19, 56, 0.6)',
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBack:{
    
    width : '100%',
    height : '100%',
  },
  
});

