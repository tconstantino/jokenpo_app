/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import imagemPedra from '../images/pedra.png';
import imagemPapel from '../images/papel.png';
import imagemTesoura from '../images/tesoura.png';

class IconeEscolha extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let imagem = null;
        switch(this.props.escolha){
            case 'Papel': imagem = imagemPedra; break;
            case 'Pedra': imagem = imagemPapel; break;
            case 'Tesoura': imagem = imagemTesoura; break;
            default: return <></>;
        }
        
        return (
            <View style={{alignItems: 'center', marginBottom: 50}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.jogador}</Text>
                <Image source={imagem}></Image>
            </View>
        );
    }
}

export default IconeEscolha;