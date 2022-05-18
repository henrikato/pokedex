import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PokemonDTO from "@dto/PokemonDTO";

export type AppRouteList = {
	Home: undefined,
	Detalhes: {
		pokemon: PokemonDTO
	}
};
export type AppRouteNavigationProps = NativeStackNavigationProp<AppRouteList>;