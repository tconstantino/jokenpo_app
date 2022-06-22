/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Jokenpo extends Component{
    constructor(props){
        super(props);

        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: '',
        };

        this.posicoesJokenpo = [
            { nome: 'Pedra', perdePara: 'Papel' },
            { nome: 'Papel', perdePara: 'Tesoura' },
            { nome: 'Tesoura', perdePara: 'Pedra' },
        ];
    }

    jogarJokenpo(escolhaUsuario){
        const posicaoJokenpoUsuario = this.posicoesJokenpo[escolhaUsuario];
        const posicaoJokenpoComputador = this.posicoesJokenpo[Math.round(Math.random() * 2)];
        let resultado = 'Empate';

        if(posicaoJokenpoUsuario.nome === posicaoJokenpoComputador.perdePara){
            resultado = 'Você venceu!';
        }
        else if(posicaoJokenpoComputador.nome === posicaoJokenpoUsuario.perdePara){
            resultado = 'Computador venceu';
        }

        this.setState({
            escolhaUsuario: posicaoJokenpoUsuario.nome,
            escolhaComputador: posicaoJokenpoComputador.nome,
            resultado: resultado,
        });
    }

    render(){
        return(
            <View style={{padding: 40}}>
                <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
                <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
                <Text>Resultado: {this.state.resultado}</Text>
                <Button title='Pedra' onPress={() => {this.jogarJokenpo(0)}}></Button>
                <Button title='Papel' onPress={() => {this.jogarJokenpo(1)}}></Button>
                <Button title='Tesoura' onPress={() => {this.jogarJokenpo(2)}}></Button>
            </View>
        );
    }
}

export default Jokenpo;