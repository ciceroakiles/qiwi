import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { BarCodeScanner, Permissions } from 'expo';
import { firebaseDatabase } from '../utils/firebaseUtils';

export default class Scan extends React.Component {
    state = {
      hasCameraPermission: null,
    };
  
    componentDidMount() {
      this._requestCameraPermission();
    }
  
    _requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted',
      });
    };
  
    _handleBarCodeRead = data => {
      Alert.alert('Leitura concluída!'); //, JSON.stringify(data));
      var itemsRef = firebaseDatabase.ref('barcodes');

      //var str = JSON.stringify(data);
      //var item = { dados: str }
      //itemsRef.push(item);

      //itemsRef.push(data); // add to database (estrutura JSON)
      
      var list = [];

      itemsRef.on("child_added", function(snap) {
        snap.forEach(function(childSnap) {
          console.log("(1) [ " + childSnap.key + " ] está no banco.");
          console.log("(2) [ " + childSnap.val() + " ] está no banco.");
        });
      });

    };

    render() {
      return (
          
        <View style={styles.container}>
          {this.state.hasCameraPermission === null ?
            <Text>Aceitar permissão de câmera</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Permissão negada</Text> :
              <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={{ height: 450, width: 600 }}
              />
          }
        </View>
        
      );
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    /* handleBarCodeScanned = ({ type, data }) => {
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    } */
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }
    });
    