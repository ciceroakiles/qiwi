import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ExportedScanList } from '../Tabs/Scan';

const max_itens = 50;

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            qtds: Array(max_itens).fill(1)
        };
        this.updateQtd.bind(this);
    }

    updateQtd(i, x) {
        var copy = this.state.qtds.slice();
        if (x > 0) {
            copy[i]++;
        } else {
            if (copy[i] > 1) {
                copy[i]--;
            }
        }
        console.log("qtds_new > " + copy);
        this.setState({
            qtds: copy
        });
    }

    removeItem(item) {
        var copy = this.state.data.slice();
        copy.splice(copy.indexOf(item), 1);
        console.log("data > " + this.state.data);
        console.log("new_data > " + copy);
    }

    renderList() {
        var list = [];
        if (typeof this.state.data !== 'undefined' && this.state.data.length > 0) {
            list = this.state.data.map((item, i) => {
                return (
                    <View key={item}>
                        <Text>{ item[0] }</Text>
                        <Text>{ "R$ " + parseFloat(item[1]).toFixed(2) }</Text>
                        <Button
                            buttonStyle={{height: 35, width: 35}}
                            onPress={() => this.updateQtd(i, -1)}
                            title="-"
                        />
                        <Text>{ this.state.qtds[i] }</Text>
                        <Button
                            buttonStyle={{height: 35, width: 35}}
                            onPress={() => this.updateQtd(i, 1)}
                            title="+"
                        />
                        { }
                        <Button
                            buttonStyle={{height: 35, width: 35}}
                            onPress={() => this.removeItem(item)}
                            title="X"
                        />
                    </View>
                )
            });
        } else {
            list.push(
                <View style={styles.container}>
                    <Image style={styles.cart} source={require('../img/shopCart.png')} />
                    <Text style={styles.textEmpty}>Seu carrinho está vazio... :(</Text>
                    <Text style={styles.addItens}>Adicione itens usando Scan! :)</Text>
                </View>
            );
        }
        return list;
    }

    render() {
        setTimeout(() => {
            this.setState({
                data: ExportedScanList
            })
        }, 1000);

        return (
            <View>
                { this.renderList() }
            </View>
        );
    }
}

/*
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
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEmpty: {
        fontSize: 25,
        textAlign: 'center',
        color: '#969FAA'
    },
    addItens: {
        fontSize: 18,
        textAlign: 'center',
        color: '#969FAA'
    },
    cart: {
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        backgroundColor: '#f62459',
        height: 50,
        marginTop: 30,
        borderRadius: 20,
        paddingVertical: 7
    }
});
