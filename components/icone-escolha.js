/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class IconeEscolha extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let imagem = null;
        switch(this.props.escolha){
            case 'Papel':
                imagem = require('../images/papel.png');
                break;
            case 'Pedra':
                imagem = require('../images/pedra.png');
                break;
            case 'Tesoura':
                imagem = require('../images/tesoura.png');
                break;
            default:
                return <></>;
        }
        
        return (
            <View style={{alignItems: 'center', marginTop: 25, marginBottom: 90}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.jogador}</Text>
                <Image style={{marginTop: 20}} source={imagem}></Image>
            </View>
        );
    }
}

export default IconeEscolha;