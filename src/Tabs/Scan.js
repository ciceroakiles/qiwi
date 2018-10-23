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
  
    _handleBarCodeRead = jsonData => {
      //Alert.alert('Leitura concluída!'); //, JSON.stringify(jsonData));
      var itemsRef = firebaseDatabase.ref('barcodes');
      //itemsRef.push(jsonData); // add directly to db
      var list = [];
      itemsRef.on("child_added", function(snap) {
        snap.forEach(function(childSnap) {
          if (childSnap.key != 'type') {
            list.push(childSnap.val());
          }
        });
      });
      //console.log(list);
      if (list.includes(jsonData["data"])) {
        Alert.alert('Código presente no banco!');
      } else {
        console.log("AVISO: Sucesso na leitura, porém indisponível no banco.");
      }
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
    