
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Init from './src/components/Init';
import Login from './src/pages/Login';
import Home from './src/pages/Home';

export default class App extends React.Component {
    render(){
        return(
        <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    'Init': {
        screen: Init
    },
    'Login': {
        screen: Login
    },
    'Home': {
        screen: Home,
        navigationOptions: {
            title: 'QIWI',
        }
    },
    //Init: Init,
    //Login: Login,
    //Home: Home
    
    //'FirstPage': {
    //   screen: Init
    //  },
    // 'LoginPage': {
    //    screen: Login
    // }
   },
      {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#4045AD',
                elevation: 0,
                textAlign: 'center'
            },
            headerTitleStyle: {
                color: '#dadfe1',
                textAlign: 'center',
                alignSelf:'center',   
            },
        },
    }
);

//export default Init;
