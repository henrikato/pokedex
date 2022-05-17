import { useNavigation } from "@react-navigation/native";
import { BotaoLogar, Container, Label } from "./styles";

import PokebolaLogin from "@assets/PokebolaLogin.svg";

export default function Login() {
	const { navigate } = useNavigation();

	const acessar = () => navigate("Main");

	return (
		<Container colors={["#133ABC", "#5EBCFC"]} start={{x: 0, y: 0}} end={{x: 0, y: 0}}>
			<PokebolaLogin />
			<BotaoLogar onPress={acessar}>
				<Label>Autenticar com o IAS</Label>
			</BotaoLogar>
		</Container>
	);
};