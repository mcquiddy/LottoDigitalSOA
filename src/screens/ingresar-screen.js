import React from 'react';
import { TextInput,Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana de inicio para ingresar al sistema
*/
export default class IngresarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textU: '',textP: ''};
  }

  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>

          <TextInput style={styles.textInput}
            placeholder="CÉDULA"
            placeholderTextColor = "#FFFFFF"
            onChangeText={(textU) => this.setState({textU})}
            value={this.state.textU}
          /> 

          <TextInput style={styles.textInput}
            placeholder="CONTRASEÑA"
            placeholderTextColor = "#FFFFFF"
            onChangeText={(textP) => this.setState({textP})}
            value={this.state.textP}
          /> 

          <View style={styles.buttonMargin}>
            <Button
              title="Iniciar sesión"
              color='#00000000'
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
            <View style={styles.buttonMargin}>
              <Button
                title="Regístrate"
                color='#00000000'
                onPress={() => this.props.navigation.navigate('Registrar')}
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

