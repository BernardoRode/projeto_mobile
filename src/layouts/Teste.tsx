import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploNota from '../components/ExemploNota';

const Teste = (props: PrincipalProps) => {
    return (
        <View>
            <ExemploNota
                nome={'be'}
                nota1={10}
                nota2={10}
            />
        </View>
    );
}

export default Teste;
