import { useEffect, useState } from "react";
import PokemonDTO from "@dto/PokemonDTO";
import { BotaoHeader, Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Descricao, Header, LabelDestaque, Nome, Tipos } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { AppRouteList } from "@routes/params";
import retornaSvg from "@utils/RetornaSvg";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import TypeCard from "@components/TypeCard";
import AboutData from "@components/AboutData";
import BaseStats from "@components/BaseStats";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FavoritoDTO, { FAVORITOS_KEY } from "@dto/FavoritoDTO";
import { useAuth } from "@hooks/auth";

type DetalhesRouteProps = RouteProp<AppRouteList, "Detalhes">;

export default function Detalhes() {
	const { usuario } = useAuth();
	const { canGoBack, goBack } = useNavigation();
	const theme = useTheme();
	const route = useRoute<DetalhesRouteProps>();
	const [pokemon, setPokemon] = useState<PokemonDTO>();

	useEffect(() => {
		const { pokemon } = route.params;
		setPokemon(pokemon);
	}, []);

	if (!pokemon) return <View />;

	const voltar = () => {
		if (canGoBack()) {
			goBack();
		}
	}

	const addFavorito = async (pokemon: PokemonDTO) => {
		const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);

		const favoritosParse: Array<FavoritoDTO> = favoritosStorage ? JSON.parse(favoritosStorage) : [];
		
		favoritosParse.push({ id: Math.random(), usuario: usuario!, pokemon });

		await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritosParse));
	}

	return (
		<Container type={pokemon.types[0].name}>
			<Header>
				<ConteudoTitulo>
					<BotaoHeader onPress={voltar}>
						<Feather name="arrow-left" size={22} color={theme.white} />
					</BotaoHeader>
					<Nome>{pokemon.name}</Nome>
					<Codigo>{pokemon.code}</Codigo>
				</ConteudoTitulo>
				<BotaoHeader onPress={() => addFavorito(pokemon)}>
					<MaterialCommunityIcons name="heart" size={22} color={theme.white} />
				</BotaoHeader>
			</Header>
			<Conteudo>
				<ConteudoSvg>
					{retornaSvg(pokemon.name, 200, 200)}
				</ConteudoSvg>
				<Tipos>
					<FlatList
						horizontal
						data={pokemon.types}
						keyExtractor={({ id }) => String(id)}
						renderItem={({ item }) => <TypeCard tipoPokemon={item} />}
						ItemSeparatorComponent={() => <View style={{ width: 20, height: 20 }} />} />
				</Tipos>

				<LabelDestaque type={pokemon.types[0].name}>
					About
				</LabelDestaque>
				<AboutData pokemon={pokemon} />
				<Descricao>{pokemon.about.description}</Descricao>

				<LabelDestaque type={pokemon.types[0].name}>
					Base Stats
				</LabelDestaque>
				<BaseStats stats={pokemon.base_stats} type={pokemon.types[0].name} />
			</Conteudo>
		</Container>
	);
}