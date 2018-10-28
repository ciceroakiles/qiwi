import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ExportedScanList } from '../Tabs/Scan';

// TODO: Identificação via bd.
function nomear(code) {
    switch (code) {
        case "9788538064718": return "A ARTE DA GUERRA";
        case "7898916448732": return "SUDOKU (MÉDIO/DIFÍCIL)";
        case "7891991010832": return "BUDWEISER BEER";
    }
}

const Item = (props) => (
    <Text className="item">
        { nomear(props.texto) }
    </Text>
)

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    uniqueItems(duplicates) {
        if (duplicates) {
            var unique = duplicates.filter(function(elem, pos) {
                return duplicates.indexOf(elem) == pos;
            });
            return unique;
        } else {
            return [];
        }
    }

    render() {
        setTimeout(() => {
            this.setState({
                data: ExportedScanList
            })
        }, 500);
        var content = [];
        if (this.state.data) {
            var temp = this.uniqueItems(this.state.data); // ExportedScanList);
            for (var i = 0; i < temp.length; i++) {
                content.push(<Item key={i} texto={ temp[i] } />);
            }
        }
        if (!content) {
            content = ["(Sua lista está vazia!)"];
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Itens</Text>
                { content }
            </View>
        ); // <div key={id}>{ content }</div> // id=length?
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
        fontSize: 12,
        textAlign: 'left',
        margin: 5
    }
});
