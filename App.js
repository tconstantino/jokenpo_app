/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import Jokenpo from './components/jokenpo';

const App: () => React$Node = () => {
  return (
    <Jokenpo></Jokenpo>
  );
};

export default App;
