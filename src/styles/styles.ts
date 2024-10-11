import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    telaLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    titulo3: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },

    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },
    TelaLogin: {
        alignItems: 'center'
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
    item: {
        
    }
});

export { styles };