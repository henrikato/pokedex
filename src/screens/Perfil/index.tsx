import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/auth";
import { useTheme } from "styled-components";
import { Avatar, AvatarWrapper, BotaoSair, BotaoVoltar, Container, Header, Nome, TextoBotaoSair, Titulo } from "./styles";

export default function Profile() {
	const { usuario, logout } = useAuth();
	const { canGoBack, goBack } = useNavigation();
	const theme = useTheme();

	const voltar = () => {
		if(canGoBack()) {
			goBack();
		}
	}
	
	return (
		<Container>
			<Header>
				<BotaoVoltar onPress={voltar}>
					<Feather name="arrow-left" size={22} color={theme.normal} />
				</BotaoVoltar>
				<Titulo>Perfil</Titulo>
			</Header>
			
			<AvatarWrapper>
				<Avatar source={{ uri: usuario?.imagem || "https://pbs.twimg.com/profile_images/1329549762316611588/q7K0ULFI_400x400.jpg" }} />
			</AvatarWrapper>

			<Nome>{usuario?.usuarioNome}</Nome>

			<BotaoSair onPress={logout}>
				<MaterialCommunityIcons name="logout" size={22} color={theme.white} />
				<TextoBotaoSair>Sair</TextoBotaoSair>
			</BotaoSair>
		</Container>
	);
}