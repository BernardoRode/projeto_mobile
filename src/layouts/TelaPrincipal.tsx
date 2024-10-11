    import { View } from "react-native";
    import { PrincipalProps } from "../navigation/HomeNavigator";
    import { styles } from "../styles/styles";
    import { Produtos } from "../type/Produto";
    import ListaProdutos from "../components/ListaProdutos";


    const TelaPrincipal = (props: PrincipalProps) => {

        let Produto1 = { nome: 'Pão', codigo: 'WASFE-1443', preco: 20.00 } as Produtos;
        let Produto2 = { nome: 'Queijo', codigo: 'UEFHEU-3434', preco: 40.00 } as Produtos;
        let Produto3 = { nome: 'Mortadela', codigo: 'FEUFE-2443', preco: 15.00 } as Produtos;
        let Produto4 = { nome: 'Pastel', codigo: 'DEFEGE-3525', preco: 30.00 } as Produtos;

        let listaProduto = [Produto1, Produto2, Produto3, Produto4] as Produtos[];

        return (
            <View style={[styles.tela]}>
                <ListaProdutos listaProduto={listaProduto}/>
            </View>
        );
        
    }

    export default TelaPrincipal;
