import React from 'react';
import { TextInput,Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana de inicio de la aplicación, donde el usuario podrá realizar la acción de 
solicitar o reservar un espacio en el parqueo o para administrar el espacio reservado
*/
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textU: '',textP: '',textN: '',textA1: '',textA2: ''};
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

            <TextInput style={styles.textInput}
                placeholder="NOMBRE"
                placeholderTextColor = "#FFFFFF"
                onChangeText={(textN) => this.setState({textN})}
                value={this.state.textN}
            /> 

            <TextInput style={styles.textInput}
                placeholder="APELLIDO 1"
                placeholderTextColor = "#FFFFFF"
                onChangeText={(textA1) => this.setState({textA1})}
                value={this.state.textA1}
            /> 

            <TextInput style={styles.textInput}
                placeholder="APELLIDO 2"
                placeholderTextColor = "#FFFFFF"
                onChangeText={(textA2) => this.setState({textA2})}
                value={this.state.textA2}
            /> 

            <View style={styles.buttonMargin}>
                <Button
                title="Guardar"
                color='#00000000'
                onPress={() => this.props.navigation.navigate('Home')}
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

