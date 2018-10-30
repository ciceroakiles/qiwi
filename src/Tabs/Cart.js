import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { ExportedScanList } from '../Tabs/Scan';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            qtds: Array(3).fill(1) // Comentários abaixo de this.renderNameList()
        };
        this.updateQtd.bind(this);
    }

    updateQtd(i, x) {
        var copy = this.state.qtd.slice();
        if (x > 0) {
            copy[i]++;
        } else {
            if (copy[i] > 1) {
                copy[i]--;
            }
        }
        this.setState({
            qtd: copy
        });
    }

    renderNameList() {
        var list = [];
        if (typeof this.state.data !== 'undefined' && this.state.data.length > 0) {
            //console.log("data > " + this.state.data); //console.log("qtds > " + this.state.qtds);
            list = this.state.data.map((item) => {
                return (
                    <View>
                        <Text key={item}>{ item[0] + ", " + item[1] }</ Text>
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

    /*
    renderButtons() {
        var componentList = [];
        if (typeof this.state.qtds !== 'undefined' && this.state.qtds.length > 0) {
            componentList = this.state.qtds.map((num, i) => {
                <div>{this.itemControlRender(num, i)}</div>
            });
        } else {
            componentList.push(<div />);
        }
        return componentList;
    }
    */

    itemControlRender(num, i) {
        return (
            <View key={i} style={{flex: 1, flexDirection: 'column', padding: 20}}>
                <Button onPress={() => this.updateQtd(i, -1)} title="-" />
                <Text>{ num }</Text>
                <Button onPress={() => this.updateQtd(i, 1)} title="+" />
            </View>
        );
    }

    render() {
        setTimeout(() => {
            this.setState({
                data: uniqueItems(ExportedScanList)
            })
        }, 1000);

        return (
            <View>
                { this.renderNameList() }

                {/* this.state.qtds.map((item, index) => (
                    <View>
                        {this.itemControlRender(item, index)}
                    </View>
                )) */}
            </View>
        );
    }
}

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
