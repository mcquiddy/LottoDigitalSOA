import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
 // Version can be specified in package.json
import HomeScreen from './src/screens/home-screen'
import InitScreen from './src/screens/init-screen'
import RegisterScreen from './src/screens/register-screen'
import HistoryScreen from './src/screens/history-screen'
import IngresarScreen from './src/screens/ingresar-screen'
import UserScreen from './src/screens/user-screen'
import CarteraScreen from './src/screens/cartera-screen'
import RecargaScreen from './src/screens/recargas-screen'
import JuegoScreen from './src/screens/juegos-screen'
import LottoScreen from './src/screens/lotto-screen'
import JugadoScreen from './src/screens/jugados-screen'
import PremioScreen from './src/screens/premios-screen'
/*
Inicializa las ventanas que se usaran  durante la ejecución de la aplicación
 */
const RootStack = createStackNavigator(
  {
     
   
    Home: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: HomeScreen,
    },
    Init: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: InitScreen,
    },
    Ingresar: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: IngresarScreen,
    },
    Registrar: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: RegisterScreen,
    },
    Usuario: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: UserScreen,
    },
    Historia: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: HistoryScreen,
    },
    Cartera: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: CarteraScreen,
    },
    Recarga: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: RecargaScreen,
    },
    Juego: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: JuegoScreen,
    },
    Lotto: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: LottoScreen,
    },
    Jugado: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: JugadoScreen,
    },
    Premio: {
      navigationOptions: {
        title: "Lotto Digital",
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#95ffff',
      },
      screen: PremioScreen,
    },
    
  },
  {
    initialRouteName: 'Init',
  }
);

const AppContainer = createAppContainer(RootStack);
/*
Inicializa la aplicación
*/
export default class App extends React.Component {
  constructor(){
 
    super();
    global.Name = 'Cristian';
    global.Apellido1 = 'Castillo';
    global.Apellido2 = 'McQuiddy';
    global.Cedula = '116020473';
    global.Contra = '1234';
    global.Cartera = 10600;
    global.RecargasValue = [1000, 2000,5000, 3000];
    global.RecargasPuntoVenta = ['Cartago', 'San José','Cartago','Heredia'];
    global.JuegosNumbers=['00-05-03-44-06','00-05-03-44-06','00-05-03-44-06'];
    global.JuegosDay=['10:20:40','12:05:20','23:06:01'];
    global.JuegosValue=[200,500,300];
    global.PremiosNumbers=['00-05-03-44-06'];
    global.PremiosValue=[600];
    global.PuntosVentas=['Cartago','San José','Heredia'];
    global.ListNumber=['00','01','02','03','04','05','06','07','08','09',
                      '10','11','12','13','14','15','16','17','18','19',
                      '20','21','22','23','24','25','26','27','28','29',
                      '30','31','32','33','34','35','36','37','38','39',
                      '40']
  }
  render() {
    return <AppContainer />;
  }
}