import TypeCard from "@components/TypeCard";
import PokemonDTO from "@dto/pokemonDTO";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import retornaSvg from "@utils/RetornaSvg";
import { Botao, Container, ConteudoSvg, ConteudoTexto, Descricao, LabelBold, Opcao, Tipos } from "./styles";

type FavoriteCardProps = {
	pokemon: PokemonDTO
}
export default function FavoriteCard({pokemon}: FavoriteCardProps) {
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
				<Botao>
					<MaterialCommunityIcons name="heart-broken" size={20} />
				</Botao>
			</Opcao>
		</Container>
	);
}