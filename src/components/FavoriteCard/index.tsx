import TypeCard from "@components/TypeCard";
import PokemonDTO from "@dto/PokemonDTO";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import retornaSvg from "@utils/RetornaSvg";
import { Botao, Container, ConteudoSvg, ConteudoTexto, Descricao, LabelBold, Opcao, Tipos } from "./styles";

type FavoriteCardProps = {
	pokemon: PokemonDTO
	onDelete: () => void
}
export default function FavoriteCard({pokemon, onDelete}: FavoriteCardProps) {
	const { types, name, code } = pokemon;
	return (
		<Container>
			<ConteudoSvg>
				{retornaSvg(name, 95, 97)}
			</ConteudoSvg>
			<ConteudoTexto>
				<Descricao>
					<LabelBold>{name}</LabelBold>
					<LabelBold>{code}</LabelBold>
				</Descricao>
				<Tipos>
					<TypeCard tipoPokemon={types[0]} />
				</Tipos>
			</ConteudoTexto>
			<Opcao>
				<Botao onPress={onDelete}>
					<MaterialCommunityIcons name="heart-broken" size={20} />
				</Botao>
			</Opcao>
		</Container>
	);
}