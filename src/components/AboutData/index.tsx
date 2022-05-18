import PokemonDTO from "@dto/PokemonDTO";
import { Acoes, Container, Dados, Medidas, Nome, Valor } from "./styles";

import Altura from "@assets/icons/height.svg";
import Peso from "@assets/icons/weight.svg";

type AboutDataProps = {
	pokemon: PokemonDTO
}
export default function AboutData({pokemon}: AboutDataProps) {
	const {about, moves} = pokemon;

	return (
		<Container>
			<Dados>
				<Medidas>
					<Peso width={16} height={16} style={{ marginRight: 8 }} />
					<Valor>{about.weight}</Valor>
				</Medidas>
				<Nome>Weight</Nome>
			</Dados>

			<Dados>
				<Medidas>
					<Altura width={16} height={16} style={{ marginRight: 8 }} />
					<Valor>{about.height}</Valor>
				</Medidas>
				<Nome>Height</Nome>
			</Dados>

			<Dados ocultarBorda>
				<Acoes>
					{moves.map(({ id, name }) => <Valor key={id}>{name}</Valor>)}
				</Acoes>
				<Nome>Moves</Nome>
			</Dados>
		</Container>
	);
}