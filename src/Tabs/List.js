import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { toList } from '../Tabs/Scan';

export default class List extends React.Component {
    render() {
        var test;
        if (toList == undefined) {
            test = "";
        } else {
            test = toList[0];
        }
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Itens</Text>
                <Text style={styles.item}>{ test }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },       
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    item: {
        fontSize: 20,
        textAlign: 'left',
    }
});