import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ExportedScanList } from '../Tabs/Scan';

const max_itens = 50;

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scan_data: [],
            qtds: Array(max_itens).fill(1)
        };
        this.updateQtdItem.bind(this);
        this.addremoveItem.bind(this);
    }

    updateQtdItem(i, x) {
        var qcopy = this.state.qtds.slice(); //, dcopy = this.state.scan_data.slice();
        if (x > 0) {
            qcopy[i]++;
        } else {
            if (qcopy[i] > 1) {
                qcopy[i]--;
            }
        }
        this.setState({
            qtds: qcopy
        });
    }

    addremoveItem(i) { //, item) {
        var qcopy = this.state.qtds.slice(); //, dcopy = this.state.scan_data.slice();
        if (this.state.qtds[i] != 0) {
            //dcopy.splice(i, 1);
            qcopy[i] = 0;
        } else {
            //dcopy.splice(i, 1, item);
            qcopy[i] = 1;
        }
        this.setState({
            qtds: qcopy
        });
    }

    getTotal() {
        var t = 0;
        for (var i = 0; i < this.state.scan_data.length; i++) {
            t += this.state.scan_data[i][1] * this.state.qtds[i];
        }
        console.log("total >>> " + t);
        return t;
    }

    renderList() {
        var list = this.state.scan_data.map((item, i) => {
            return (
                <View key={item}>
                    <Text>{ item[0] }</Text>
                    { this.state.qtds[i] == 0 ? 
                    <Text>{ "(Removido do carrinho)" }</Text> :
                    <View>
                        <Text>{ "R$ " + (parseFloat(item[1]) * this.state.qtds[i]).toFixed(2) }</Text>
                        <Button
                            buttonStyle={{height: 35, width: 35}}
                            onPress={() => this.updateQtdItem(i, -1)}
                            title="-"
                        />
                        <Text>{ this.state.qtds[i] }</Text>
                        <Button
                            buttonStyle={{height: 35, width: 35}}
                            onPress={() => this.updateQtdItem(i, 1)}
                            title="+"
                        />
                    </View>
                    }
                    <Text>{"\n"}</Text>
                    <Button
                        buttonStyle={{height: 35, width: 35}}
                        onPress={() => this.addremoveItem(i)} //, item)}
                        title={ this.state.qtds[i] == 0 ? "+" : "X" }
                    />
                </View>
            )
        });
        list.push(
            <View>
                <Text>{ "\nTotal: R$ " + this.getTotal().toFixed(2) }</Text>
            </View>
        );
        return list;
    }

    render() {
        setTimeout(() => {
            this.setState({
                scan_data: ExportedScanList
            })
        }, 1000);

        var displayItems = [];
        if (typeof this.state.scan_data !== 'undefined' && this.state.scan_data.length > 0) {
            displayItems = this.renderList();
        } else {
            displayItems.push(
                <View style={styles.container}>
                    <Image style={styles.cart} source={require('../img/shopCart.png')} />
                    <Text style={styles.textEmpty}>Seu carrinho está vazio... :(</Text>
                    <Text style={styles.addItens}>Adicione itens usando Scan! :)</Text>
                </View>
            );
        }

        return (
            <View>
                { displayItems }
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
