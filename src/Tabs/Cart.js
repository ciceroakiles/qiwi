import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ExportedScanList } from '../Tabs/Scan';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] //, qtds: 1
        };
        this.diminui.bind(this);
        this.aumenta.bind(this);
    }

    diminui = () => { this.setState({ qtds: this.state.qtds - 1 }) }
    aumenta = () => { this.setState({ qtds: this.state.qtds + 1 }) }

    renderNameList() {
        var list = [];
        if (typeof this.state.data !== 'undefined' && this.state.data.length > 0) {
            //console.log("data > " + this.state.data); //console.log("qtds > " + this.state.qtds);
            list = this.state.data.map((item) => {
                //console.log("index > " + i);
                return (
                    <ItemName key={item} texto={ item[0] + ", " + item[1] } />
                )
            });
        } else {
            list.push(
                <View style={styles.container}>
                    <Image style={styles.cart} source={require('../img/shopCart.png')} />
                    <Text style={styles.textEmpty}> Seu carrinho está vazio... :( </Text>
                    <Text style={styles.addItens}> Adicione itens usando Scan! :) </Text>
                </View>
            );
        }
        return list;
    }

    render() {
        setTimeout(() => {
            this.setState({
                data: uniqueItems(ExportedScanList),
            })
        }, 1000);
        return (
            <View>
                { this.renderNameList() }
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

/* // Apenas para vetores (arrays). Não funciona com matrizes (arrays de arrays)...
function uniqueItems(duplicates) {
    if (typeof duplicates !== 'undefined' && duplicates.length > 0) {
        var unique = duplicates.filter(function(elem, pos) {
            return duplicates.indexOf(elem) == pos;
        });
        return unique;
    } else {
        return [];
    }
}
*/

const ItemName = (props) => (
    <Text>
        { props.texto }
    </Text>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
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

/*
const styles = StyleSheet.create({       
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    item: {
        fontSize: 12,
        textAlign: 'center',
        margin: 5
    }
});
*/

//const oneLineDiv = { display: 'inline-block' };
