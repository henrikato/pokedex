import { Container, Nome, Codigo } from "./styles";
import PokemonDTO from "@dto/pokemonDTO";
import RetornaSvg from "@utils/RetornaSvg";

type Props = {
	pokemon: PokemonDTO
}
export default function SmallCard({ pokemon: { code, name, types } }: Props) {
	const type = types[0].name;

	const icone = RetornaSvg(name);

	return (
		<Container type={type}>
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