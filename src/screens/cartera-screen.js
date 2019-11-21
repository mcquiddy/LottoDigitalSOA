import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { ListItem ,List,ListView,TextInput,Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana de inicio de la aplicación, donde el usuario podrá realizar la acción de 
solicitar o reservar un espacio en el parqueo o para administrar el espacio reservado
*/
export default class CarteraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textR: ''};
  }

  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
            <RNPickerSelect
                style={pickerStyle}
                onValueChange={(value) => console.log(value)}
                placeholder={{ label: 'Punto de Venta..',value: null}}
                items={[
                    { label: 'Cartago', value: 'Cartago'},
                    { label: 'San José', value: 'San José' },
                    { label: 'Heredia', value: 'Heredia'},
                ]}
                
                
             />

            <TextInput style={styles.textInput}
                placeholder="MONTO"
                placeholderTextColor = "#FFFFFF"
                keyboardType={'numeric'}
                onChangeText={(textR) => this.setState({textR})}
                value={this.state.textR}
            /> 


            <View style={styles.buttonMargin}>
              <Button
                title="Recargar"
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

const pickerStyle = {
	inputIOS: {
		color: 'white',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'white',
	},
	placeholderColor: 'white',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#FFFFFF',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};

