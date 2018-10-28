import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { List } from '../utils/firebaseService';
//import { FDatabase } from '../utils/config'; // add_data

export default class Scan extends React.Component {
  state = {
    hasCameraPermission: null //, data: []
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
    //var itemsRef = FDatabase.ref('barcodes'); // add_data
    //itemsRef.push(jsonData); // add_data
    if (!List.includes(jsonData["data"])) {
      console.log(jsonData);
      console.log("AVISO: Sucesso na leitura, porém indisponível no bd.");
    } else {
      //this.state.data.push(jsonData["data"]); // FORCE
      ExportedScanList.push(jsonData["data"]);
      Alert.alert('Leitura concluída!'); //, JSON.stringify(jsonData));
      console.log(ExportedScanList); // this.state.data);
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

  /*
  handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
  */
}

export var ExportedScanList = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});
