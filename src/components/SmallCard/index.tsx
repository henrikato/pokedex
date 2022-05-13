import { Container, Nome, Codigo } from "./styles";
import PokemonDTO from "@dto/pokemonDTO";
import RetornaSvg from "@utils/RetornaSvg";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
	pokemon: PokemonDTO
}
export default function SmallCard({ pokemon: { code, name, types }, ...props }: Props) {
	const type = types[0].name;

	const icone = RetornaSvg(name);

	return (
		<Container type={type} onPress={props.onPress}>
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