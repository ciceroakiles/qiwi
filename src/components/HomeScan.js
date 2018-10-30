// BOTAO SCAN DA HOME

import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class HomeScan extends React.Component{
    render() {
        return(
            <TouchableOpacity>
                <Image
                    source={require('../img/scan111.png')}
                    style={styles.banner}
                />
            </TouchableOpacity>
        );
    }
}
    
const styles = StyleSheet.create({
    banner:{
        height: 160,
        width: 370,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 17                                        
    } 
});
