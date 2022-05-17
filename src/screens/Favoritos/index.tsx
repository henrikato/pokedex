import FavoriteCard from "@components/FavoriteCard";
import PokemonDTO from "@dto/pokemonDTO";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Container, Header, Titulo } from "./styles";

export default function Favoritos() {
	const [dataSource, setDataSource] = useState<Array<PokemonDTO>>([]);

	return (
		<Container>
			<Header>
				<Titulo>Favoritos</Titulo>
			</Header>
			<FlatList
				data={dataSource}
				keyExtractor={({id}) => String(id)}
				renderItem={({item}) => <FavoriteCard pokemon={item} />} />
		</Container>
	);
};