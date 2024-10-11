import { Text } from "react-native";
import { styles } from "../styles/styles";

type NotaProps = {
    nome: String;
    nota1: number;
    nota2: number;
}
const ExemploNota = (props: NotaProps) => {
    function media() {
        return (props.nota1 + props.nota2) / 2;
    }
    function aprovado() {
        if (media() >= 7) {
            return "Sim"
        } else return "Não"
    }
    return (
        <>
            <Text style={styles.titulo2}>Nome:{props.nome}</Text>
            <Text style={styles.titulo2}>Nota:{media()}</Text>
            <Text style={styles.titulo2}>Aprovado:{aprovado()}</Text>
        </>
    )
};
export default ExemploNota;