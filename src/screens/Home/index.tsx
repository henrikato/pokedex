import { useEffect, useState } from "react";
import api from "@services/api";
import PokemonDTO from "@dto/pokemonDTO";

import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";
import SmallCard from "@components/SmallCard";

import Icone from "@assets/icons/pokeball.svg";
import SortAsc from "@assets/icons/sortasc.svg";
import SortDesc from "@assets/icons/sortdesc.svg";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppRouteNavigationProps } from "@routes/styles";

export default function Home() {
	const { navigate } = useNavigation<AppRouteNavigationProps>();
	const [decrescente, setDecrescente] = useState(false);
	const [pokemons, setPokemons] = useState<Array<PokemonDTO>>([]);
	const [nomeFiltro, setNomeFiltro] = useState("");

	const alteraTipoFiltro = () => setDecrescente(prevState => !prevState);

	function navegarParaDetalhes(pokemon: PokemonDTO) {
		navigate("Detalhes", { pokemon });
	}

	async function getPokemons () {
		try {
			let params: any = {
				_sort: "name",
				_order: decrescente ? "desc" : "asc",
				name_like: nomeFiltro
			}
			if(!nomeFiltro) {
				delete params.nome_like;
			}

			const { data } = await api.get<Array<PokemonDTO>>("/pokemons", { params });

			setPokemons(data || []);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getPokemons();
	}, [decrescente, nomeFiltro]);

	return (
		<TouchableWithoutFeedback>
			<Container>
				<Header>
					<ConteudoTitulo>
						<Icone width={24} height={24} />
						<Titulo>Pokémon</Titulo>
					</ConteudoTitulo>
					<BotaoOrdenacao onPress={alteraTipoFiltro}>
						{decrescente ? <SortAsc /> : <SortDesc />}
					</BotaoOrdenacao>
				</Header>
				<InputTexto placeholder="Procurar" onChangeText={setNomeFiltro} />
				<FlatList
					data={pokemons}
					keyExtractor={({id}) => String(id)}
					numColumns={3}
					contentContainerStyle={{
						alignItems: "stretch",
						justifyContent: "center"
					}}
					style={{ width: "100%" }}
					renderItem={({item}) => <SmallCard pokemon={item} onPress={() => navegarParaDetalhes(item)} />} />
			</Container>
		</TouchableWithoutFeedback>
	)
}