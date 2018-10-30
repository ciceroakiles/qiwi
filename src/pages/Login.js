import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LoginForm from '../components/LoginForm';
import { KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component{
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={-500}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../img/qiwiLogo.png')} />
                    </View>
                    <View style={styles.formStyle}>
                        <LoginForm onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
            backgroundColor: '#4045AD',
        },
        logoContainer:{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        },
        logo:{
            width: 150,
            height: 150
        },
        formStyle: {
            marginTop: 50
        }
});
