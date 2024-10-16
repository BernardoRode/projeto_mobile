import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import Teste from "../layouts/Teste";

type RootStackParamList = {
    TelaPrincipal: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaPrincipal"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

export default HomeNavigator;
export type {
    PrincipalProps
};