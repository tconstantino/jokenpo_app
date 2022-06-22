/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import TopoJokenpo from './topo-jokenpo';
import IconeEscolha from './icone-escolha';

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
            resultado = 'Você venceu!!!';
        }
        else if(posicaoJokenpoComputador.nome === posicaoJokenpoUsuario.perdePara){
            resultado = 'Você perdeu :(';
        }

        this.setState({
            escolhaUsuario: posicaoJokenpoUsuario.nome,
            escolhaComputador: posicaoJokenpoComputador.nome,
            resultado: resultado,
        });
    }

    render(){
        return(
            <View>
                <TopoJokenpo></TopoJokenpo>

                <View style={styles.painelBotoes}>
                    <View style={styles.botaoEscolha}>
                        <Button color='white' title='Pedra' onPress={() => {this.jogarJokenpo(0)}}></Button>
                    </View>
                    <View style={styles.botaoEscolha}>
                        <Button color='white' title='Papel' onPress={() => {this.jogarJokenpo(1)}}></Button>
                    </View>
                    <View style={styles.botaoEscolha}>
                        <Button color='white' title='Tesoura' onPress={() => {this.jogarJokenpo(2)}}></Button>
                    </View>
                </View>

                <View style={styles.palco}>
                    <Text style={styles.textoResultado}>{this.state.resultado}</Text>
                    <IconeEscolha escolha={this.state.escolhaUsuario} jogador='Usuário'></IconeEscolha>
                    <IconeEscolha escolha={this.state.escolhaComputador} jogador='Computador'></IconeEscolha>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    botaoEscolha: {
        width: 90,
        backgroundColor: '#2196F3',
        color: 'white',
    },
    painelBotoes: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    palco: {
        alignItems: 'center',
        marginTop: 10,
    },
    textoResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#CD5C5C',
        height: 60,
    },
    imagem: {
        margin: 10,
    }
});

export default Jokenpo;