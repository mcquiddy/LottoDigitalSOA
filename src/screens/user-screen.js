import React from 'react';
import { Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana para mostrar la información del usuario
*/
export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textU: '',textP: ''};
  }

  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>

            <Text style={styles.text}>
                Cédula
            </Text>
            <Text selectable={true} style={styles.textShow} >
                {global.Cedula}
            </Text>   

            <Text style={styles.text}>
                Contraseña
            </Text>
            <Text selectable={true} style={styles.textShow} >
                {global.Contra}
            </Text>   

            <Text style={styles.text}>
                Nombre
            </Text>
            <Text selectable={true} style={styles.textShow} >
                {global.Name}
            </Text>   

            <Text style={styles.text}>
                Apellido 1
            </Text>
            <Text selectable={true} style={styles.textShow} >
                {global.Apellido1}
            </Text>   

            <Text style={styles.text}>
                Apellido 2
            </Text>
            <Text selectable={true} style={styles.textShow} >
                {global.Apellido2}
            </Text>   

            <View style={styles.buttonMargin}>
              <Button
                title="Registro Histórico"
                color='#00000000'
                onPress={() => this.props.navigation.navigate('Historia')}
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
  textShow:{
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
  
});

