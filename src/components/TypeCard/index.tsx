import { PokemonType } from "@dto/pokemonDTO";
import { Container, Tipo } from "./styles";

type TypeCardProps = {
	tipoPokemon: PokemonType
}
export default function TypeCard({tipoPokemon: {name}, ...props}: TypeCardProps) {

	const titulo = name[0].toUpperCase() + name.substring(1);

	return (
		<Container type={name} {...props}>
			<Tipo>{titulo}</Tipo>
		</Container>
	);
}