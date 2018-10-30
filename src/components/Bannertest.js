//BANNER DA TELA HOME 

import React, {Component} from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

const listItem = [
    {
        key: 1,
        name: 'banerUm',
        image: 'https://uploaddeimagens.com.br/images/001/658/042/original/banner111.png?1538960515'
    },
    {
        key: 2,
        name: 'banerDois',
        image: 'https://uploaddeimagens.com.br/images/001/658/043/original/comoFunciona.png?1538960538'
    },
    {
        key: 3,
        name: 'banerTres',
        image: 'https://uploaddeimagens.com.br/images/001/658/044/original/banner.jpg?1538960578'
    }
]

class Bannertest extends Component{
    _renderItem(item){
        return(
            <Image style={styles.imageList}
                source={{uri: item.image}} />       
        )
    }
        render() {
            
            return(
                <View style={styles.container}>
      
                    <FlatList 
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width: 5}} />}
                        renderItem={({item}) => this._renderItem(item)}
                        data={listItem}
                        
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
            width: 500,
            height: 250,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,

            borderRadius: 17


        }
    });

    export default Bannertest;