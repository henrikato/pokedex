import { Container, Nome, Codigo } from "./styles";
import PokemonDTO from "@dto/PokemonDTO";
import RetornaSvg from "@utils/RetornaSvg";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppRouteNavigationProps } from "@routes/styles";

type Props = TouchableOpacityProps & {
	pokemon: PokemonDTO
}
export default function SmallCard({ pokemon, ...props }: Props) {
	const { navigate } = useNavigation<AppRouteNavigationProps>();
	const { code, name, types } = pokemon;
	const type = types[0].name;

	const icone = RetornaSvg(name);

	function navegarParaDetalhes() {
		navigate("Detalhes", { pokemon });
	}

	return (
		<Container type={type} onPress={navegarParaDetalhes}>
			<Codigo type={type}>
				{code}
			</Codigo>
			{icone}
			<Nome type={type}>
				{name}
			</Nome>
		</Container>
	);
}