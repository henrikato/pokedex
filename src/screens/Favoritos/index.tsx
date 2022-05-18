import FavoriteCard from "@components/FavoriteCard";
import FavoritoDTO, { FAVORITOS_KEY } from "@dto/FavoritoDTO";
import PokemonDTO from "@dto/PokemonDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Container, Header, Titulo } from "./styles";

export default function Favoritos() {
	const isFocused = useIsFocused();
	const [dataSource, setDataSource] = useState<Array<FavoritoDTO>>([]);

	async function getFavoritos() {
		const favoritoStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
		const favoritoParse: Array<FavoritoDTO> = favoritoStorage ? JSON.parse(favoritoStorage) : [];
		setDataSource(favoritoParse);
	}

	useEffect(() => {
		if(isFocused) getFavoritos();
	}, [isFocused]);

	function removerFavorito(id: number) {
		Alert.alert(
			"Remover favorito",
			"Deseja remover este pokémon dos favoritos?",
			[
				{ text: "SIM", onPress: () => removeFromStorage(id) },
				{ text: "NÃO", style: "cancel" }
			])
	}

	async function removeFromStorage(id: number) {
		const newState = dataSource.filter(x => x.id !== id);
		await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(newState));
		
		await getFavoritos();
	}

	return (
		<Container>
			<Header>
				<Titulo>Favoritos</Titulo>
			</Header>
			<FlatList
				data={dataSource}
				style={{ flex: 1 }}
				keyExtractor={({ id }) => String(id)}
				renderItem={({ item: { id, pokemon } }) => (
					<FavoriteCard pokemon={pokemon} onDelete={() => removerFavorito(id)} />
				)} />
		</Container>
	);
};