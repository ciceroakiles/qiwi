import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { List } from '../utils/firebaseService';
//import { FDatabase } from '../utils/config'; // add_data

export default class Scan extends React.Component {
  navigationOptions = {
    header: 'Scanner'
  }

  state = {
    hasCameraPermission: null
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
    // JSON.stringify(jsonData));
    //var itemsRef = FDatabase.ref('barcodes'); itemsRef.push(jsonData); // add_data
    const code = jsonData["data"];
    if (!List.includes(code)) {
      console.log(jsonData);
      console.log("AVISO: Sucesso na leitura, porém indisponível no bd.");
    } else {
      //this.state.data.push(jsonData["data"]); // FORCE
      const nome = List[List.indexOf(code)+1], preco = List[List.indexOf(code)+2];
      //console.log("nome > " + nome); // console.log("preco > " + preco);
      ExportedScanList.push([nome, preco]);
      Alert.alert('Leitura concluída!');
    }
    ExportedScanList = uniqueItems(ExportedScanList);
    //console.log("scans > " + ExportedScanList); // this.state.data);
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
}

export var ExportedScanList = [];

function uniqueItems(duplicates) {
  if (typeof duplicates !== 'undefined' && duplicates.length > 0) {
      var hashMap = {};
      duplicates.forEach(function(arr){
          hashMap[arr.join("|")] = arr;
      });
      var result = Object.keys(hashMap).map(function(k){
          return hashMap[k]
      })
      return result;
  } else {
      return [];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});
