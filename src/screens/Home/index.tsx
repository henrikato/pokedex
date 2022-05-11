import { useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Icone from "@assets/icons/pokeball.svg";
import SortAsc from "@assets/icons/sortasc.svg";
import SortDesc from "@assets/icons/sortdesc.svg";
import SmallCard from "@components/SmallCard";

export default function Home() {
	const [decrescente, setDecrescente] = useState(false);

	const ordenar = () => setDecrescente(prevState => !prevState);

	return (
		<Container>
			<Header>
				<ConteudoTitulo>
					<Icone width={24} height={24} />
					<Titulo>Pokémon</Titulo>
				</ConteudoTitulo>
				<BotaoOrdenacao onPress={ordenar}>
					{decrescente ? <SortAsc /> : <SortDesc />}
				</BotaoOrdenacao>
			</Header>
			<InputTexto placeholder="Procurar" />
			<SmallCard />
		</Container>
	)
}