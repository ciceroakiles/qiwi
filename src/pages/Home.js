import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TabNavigator from '../Tabs/TabNavigator';

export class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.teste}> HOME </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f1e7fe'
  },
  teste:{
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});

export default TabNavigator;
