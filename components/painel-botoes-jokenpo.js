/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class PainelBotoesJokenpo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.painelBotoes}>
                <View style={styles.botaoEscolha}>
                    <Button title='Pedra' onPress={this.props.funcaoPedra}></Button>
                </View>
                <View style={styles.botaoEscolha}>
                    <Button title='Papel' onPress={this.props.funcaoPapel}></Button>
                </View>
                <View style={styles.botaoEscolha}>
                    <Button title='Tesoura' onPress={this.props.funcaoTesoura}></Button>
                </View>
            </View>
        );
    }
}

export default PainelBotoesJokenpo;

const styles = StyleSheet.create({
    botaoEscolha: {
        width: 90,
    },
    painelBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});