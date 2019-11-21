import React from 'react';
import { TextInput,Button,View, StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'
import ModalDropdown from 'react-native-modal-dropdown';
/*
Ventana para jugar el lotto, donde muestra los 5 numeros para jugar
*/
export default class LottoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textR: ''};
  }

  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
            <View style={styles.row}>
               
                <ModalDropdown style={styles.dropdown_1}
                    defaultValue='00'
                    textStyle={styles.dropdown_1_text}
                    options={global.ListNumber}
                    dropdownTextStyle={styles.dropdown_1_style}
                />
              
      
                <ModalDropdown style={styles.dropdown_1}
                    defaultValue='00'
                    textStyle={styles.dropdown_1_text}
                    options={global.ListNumber}
                    dropdownTextStyle={styles.dropdown_1_style}
                />

                <ModalDropdown style={styles.dropdown_1}
                    defaultValue='00'
                    textStyle={styles.dropdown_1_text}
                    options={global.ListNumber}
                    dropdownTextStyle={styles.dropdown_1_style}
                />

                <ModalDropdown style={styles.dropdown_1}
                    defaultValue='00'
                    textStyle={styles.dropdown_1_text}
                    options={global.ListNumber}
                    dropdownTextStyle={styles.dropdown_1_style}
                />

                <ModalDropdown style={styles.dropdown_1}
                    defaultValue='00'
                    textStyle={styles.dropdown_1_text}
                    options={global.ListNumber}
                    dropdownTextStyle={styles.dropdown_1_style}
                />



            </View>

            <TextInput style={styles.textInput}
                placeholder="MONTO"
                placeholderTextColor = "#FFFFFF"
                keyboardType={'numeric'}
                onChangeText={(textR) => this.setState({textR})}
                value={this.state.textR}
            /> 
            <View style={styles.buttonMargin}>
              <Button
                title="Jugar"
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
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
  dropdown_1: {
    top: 32,
    color: 'white',
    paddingRight:20,
    paddingLeft:20,
  },
  dropdown_1_text :{
    fontSize: 30,
    color: 'white',
  },
  dropdown_1_style :{
    fontSize: 20,
  },

});


