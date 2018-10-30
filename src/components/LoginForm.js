import React from 'react';
import {  StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mail: '',
            password: '',
        }
    }

    onChangeHandler (field, value){
        this.setState({
            [field]: value
        });
    }

    tryLogin(){
        const {mail, password } = this.state
        /*
        firebase
        .auth()
        .signInWithEmailAndPassword(mail, password)
        .then(user => {
            console.log('Usuario autenticado', user);
        })
        .catch( error => {
              console.log('Usuario nao encontrado', error);
        }
        )
        */
    }

    render() {
        return(
            <View style={styles.container} >
                <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="login ou email" 
                    value={this.state.mail}
                    onChangeText={value => this.onChangeHandler('mail',value) }
                    style={styles.input} 
                />
                <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="senha" 
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={value => this.onChangeHandler('password',value)}
                    style={styles.input} 
                />
                {/* BOTAO LOGIN */}
                <TouchableOpacity onPress={this.props.onPress} style={styles.btnContainer}> 
                    <Text style={styles.btnLogin}> LOGIN </Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    {/* BOTAO CRIAR ACC */}
                    <TouchableOpacity style={styles.createAcc}>
                        <Text style={styles.accText}>
                            Criar Conta
                        </Text>
                    </TouchableOpacity>
                    {/* BOTAO ESQUECEU SENHA */}
                    <TouchableOpacity style={styles.password}>
                        <Text style={styles.passwordText}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        fontSize: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#324359',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    //ESTILO botao
    btnContainer:{
        backgroundColor: '#f62459',
        height: 50, 
        marginTop: 30,
        borderRadius: 20,
        paddingVertical: 7
        
    },
    btnLogin:{
        textAlign: 'center',
        fontSize: 25,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    //criar conta
    createAcc: {
        marginTop: 60,
    },
    accText:{
        textAlign: 'center',
        fontSize: 17,
        color: 'rgba(241, 231, 254, 0.6)'
    },
    //esqueceu a senha
    password:{
        marginTop: 10
    },
    passwordText:{
        textAlign: 'center',
        fontSize: 17,
        color: 'rgba(241, 231, 254, 0.6)'
        
    }
});
