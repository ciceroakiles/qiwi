import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { List } from '../utils/firebaseService';
//import { FDatabase } from '../utils/config';

export default class Scan extends React.Component {
  state = {
      hasCameraPermission: null,
      data: []
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
    //var itemsRef = FDatabase.ref('barcodes');
    //itemsRef.push(jsonData);
    var flag = false;
    if (List.includes(jsonData["data"])) {
      this.state.data.push(jsonData["data"]); // FORCE
      flag = true;
    } else {
      console.log("AVISO: Sucesso na leitura, porém indisponível no banco.");
    }
    console.log(this.state.data);
    if (flag) Alert.alert('Leitura concluída!'); //, JSON.stringify(jsonData));
  };

  // TODO: Mover pra outro js.
  uniqueItems(duplicates) {
    if (duplicates) {
      var unique = duplicates.filter(function(elem, pos) {
        return duplicates.indexOf(elem) == pos;
      });
      return unique;
    } else {
      return [];
    }
  }

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

export const toList = ["(nada)", "(mais nada)", "(mais nada ainda)"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});
