import { PokemonTypeName } from "@dto/PokemonDTO";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

type Props = {
	type: PokemonTypeName
}

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		minHeight: height,
		padding: 4
	}
})<Props>`
	flex: 1;
	background-color: ${({theme, type}) => theme[type]};
`;

export const Header = styled.View`
	width: 100%;
	margin-top: 44px;
	padding-bottom: 140px;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

export const ConteudoTitulo = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const BotaoHeader = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
`;

export const Nome = styled.Text`
	margin-left: 19px;
	margin-right: 16px;
	font-family: ${({theme}) => theme.fonts.BOLD};
	color: ${({theme}) => theme.white};
	font-size: 24px;
`;

export const Codigo = styled.Text`
	font-family: ${({theme}) => theme.fonts.REGULAR};
	color: ${({theme}) => theme.white};
	font-size: 12px;
`;

export const Conteudo = styled.View`
	flex: 1;
	align-items: center;
	padding: 0 20px;
	background-color: ${({theme}) => theme.white};
	border-radius: 8px;
`;

export const ConteudoSvg = styled.View`
	position: absolute;
	margin-top: -130px;
`;

export const Tipos = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
	margin-top: 70px;
`;

export const LabelDestaque = styled.Text<Props>`
	font-family: ${({theme}) => theme.fonts.BOLD};
	color: ${({theme, type}) => theme[type]};
	font-size: 20px;
`;

export const Descricao = styled.Text`
	margin: 16px 0px;
	font-family: ${({theme}) => theme.fonts.REGULAR};
	font-size: 16px;
`;