/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

class TopoJokenpo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Image style={{width: '100%'}} source={require('../images/jokenpo.png')}></Image>
            </View>
        );
    }
}

export default TopoJokenpo;