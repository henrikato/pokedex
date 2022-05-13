import { useEffect, useState } from "react";
import PokemonDTO from "@dto/pokemonDTO";
import { BotaoHeader, Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Header, Nome } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { AppRouteList } from "@routes/styles";
import retornaSvg from "@utils/RetornaSvg";

type DetalhesRouteProps = RouteProp<AppRouteList, "Detalhes">

export default function Detalhes() {
	const route = useRoute<DetalhesRouteProps>();
	const [pokemon, setPokemon] = useState<PokemonDTO>();

	useEffect(() => {
		const { pokemon } = route.params;
		setPokemon(pokemon);
	}, []);

	if(!pokemon) return <View />;

	return (
		<Container type={pokemon.types[0].name}>
			<Header>
				<ConteudoTitulo>
					<BotaoHeader />
					<Nome>{pokemon.name}</Nome>
					<Codigo>{pokemon.code}</Codigo>
				</ConteudoTitulo>
				<BotaoHeader />
			</Header>
			<Conteudo>
				<ConteudoSvg>
					{retornaSvg(pokemon.name, 200, 200)}
				</ConteudoSvg>
			</Conteudo>
		</Container>
	);
}