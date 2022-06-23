/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopoJokenpo from './topo-jokenpo';
import PainelBotoesJokenpo from './painel-botoes-jokenpo';
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
            <View style={{flex: 1}}>
                <View>
                    <TopoJokenpo></TopoJokenpo>
                </View>

                <View style={{flex: 0.9}}>
                    <View style={styles.palco}>
                        <IconeEscolha escolha={this.state.escolhaUsuario} jogador='Você'></IconeEscolha>
                        <IconeEscolha escolha={this.state.escolhaComputador} jogador='Computador'></IconeEscolha>
                        <Text style={styles.textoResultado}>{this.state.resultado}</Text>
                    </View>
                </View>

                <View style={{flex: 0.1}}>
                    <PainelBotoesJokenpo
                        funcaoPedra={() => this.jogarJokenpo(0)}
                        funcaoPapel={() => this.jogarJokenpo(1)}
                        funcaoTesoura={() => this.jogarJokenpo(2)}>
                    </PainelBotoesJokenpo>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    palco: {
        alignItems: 'center',
        paddingTop: 60
    },
    textoResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#CD5C5C',
        marginTop: 20,
    },
});

export default Jokenpo;