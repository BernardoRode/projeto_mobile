import { FlatList, StyleSheet, Text, View } from "react-native"
import { Animal } from "../type/animal"

type ListaAnimalProps = {
    listaAnimal: Animal[]
}
const listaAnimal = (props: ListaAnimalProps) => {
    return (
        <>
            <FlatList data={props.listaAnimal}
                renderItem={(info) => {
                    return (
                        <Text style={styles.item}>{(info.index + 1) + ' - '
                            + info.item.nome + ' ' + info.item.especie}
                        </Text>
                    )
                }}
            />

            <FlatList
            data={props.listaAnimal}
            renderItem={(info) => <ItemLista animal={info.item} />}
            />
        </>
    )
}
type ItemProps = {
    animal: Animal
}
const ItemLista = (props: ItemProps) => {
    return (
        <View>
            <Text style={styles.item2}>
                {props.animal.especie + ' ' + props.animal.nome}
            </Text>
        </View>
    );
}
export default listaAnimal;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'red'
    },
    item2: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'green'
    },
})
