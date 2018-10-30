// FLATLIST DA TELA HOME ~ Imagens de empresas parceiras

import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, FlatList} from 'react-native';

const showList = [
    {
        key: 1,
        name: 'extra',
        image: 'https://image.ibb.co/foDCMV/logoextra.jpg'
    },
    {
        key: 2,
        name: 'paodeacucar',
        image: 'https://image.ibb.co/gSJe1V/logoPao.jpg'
        
    },
    {
        key: 3, 
        name: 'walmart',
        image: 'https://image.ibb.co/kKYq8A/logowalmart.jpg'
    }, 
    {
        key: 3, 
        name: 'dia',
        image: 'https://image.ibb.co/iNGovq/logoDia.jpg'
    },
    {
        key: 4, 
        name: 'carrefour',
        image: 'https://image.ibb.co/k12iTA/logo-Carrefour.jpg'
    },
    {
        key: 5, 
        name: 'americanas',
        image: 'https://image.ibb.co/nDyOTA/logo-Americanas.jpg'
    }
]


 class List extends Component{
    _renderItem(item){
        return(
            <Image style={styles.imageList}
                source={{uri: item.image}} />       
        )
    }
        render() {
            
            return(
                <View style={styles.container}>
                <Text style={styles.findText}>Onde encontrar nossos serviços?</Text>
                    <FlatList 
                        numColumns={2}
                        
                        renderItem={({item}) => this._renderItem(item)}
                        data={showList}
                        
                        />
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
        },
        imageList:{
            width: 210,
            height: 200
        },
        findText:{
            fontSize: 22,
            color: '#f0f0f0',
            textAlign: 'center',
            marginBottom: 25
        }

    });

    export default List;