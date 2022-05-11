import { Container, ImagemPokemon, NomePokemon, NumeroPokemon } from "./styles";

import Squirtle from "../../assets/pokemons/Squirtle.svg";

export default function SmallCard() {
	return (
		<Container>
			<NumeroPokemon>
				#001
			</NumeroPokemon>
			<ImagemPokemon>
				<Squirtle width={72} height={72} />
			</ImagemPokemon>
			<NomePokemon>
				Squirtle
			</NomePokemon>
		</Container>
	);
}