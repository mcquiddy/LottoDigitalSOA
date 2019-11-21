import React from 'react';
import { ListView ,Alert,Platform,TextInput,Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/back2.png'

/*
Ventana de inicio de la aplicación, donde el usuario podrá realizar la acción de 
solicitar o reservar un espacio en el parqueo o para administrar el espacio reservado
*/
export default class JugadoScreen extends React.Component {
    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });
    this.state = {
                    dataSource: ds.cloneWithRows(global.JuegosNumbers)
                 };
    }
ListViewItemSeparator = () => {
    return (
        <View style={{ height: 1, width: "100%", backgroundColor: "#FFFFFF" }} />
    );
    };
    
    GetListViewItem = (rowData) => {
        //Alert.alert(rowData);
        this.props.navigation.navigate('Lotto')
    }  
    
    
  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>

            <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={ rowData => ( <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)} >{rowData} </Text> )}
            />

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
  rowViewContainer:{
    fontSize: 18,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color:'white'
  },
  
});

