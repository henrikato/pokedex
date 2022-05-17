import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	flex-direction: row;
	margin-top: 41px;
	padding: 24px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
`;

export const Titulo = styled.Text`
	font-family: ${({theme}) => theme.fonts.BOLD};
	font-size: 18px;
`;

export const AvatarWrapper = styled.View`
	align-items: center;
	justify-content: center;
	margin: 40px;
`;
export const Avatar = styled.Image`
	width: 250px;
	height: 250px;
	border-radius: 125px;
	border-width: 20px;
	border-color: ${({theme}) => theme.primary};
`;

export const Nome = styled.Text`
	align-self: center;
	font-size: 24px;
	font-family: ${({theme}) => theme.fonts.BOLD};
	color: ${({theme}) => theme.primary};
`;

export const BotaoSair = styled.TouchableOpacity`
	flex-direction: row;
	align-self: center;
	margin-top: 24px;
	padding: 12px;
	border-radius: 8px;
	background-color: ${({theme}) => theme.primary};
`;

export const TextoBotaoSair = styled.Text`
	font-size: 18px;
	font-family: ${({theme}) => theme.fonts.BOLD};
	color: ${({theme}) => theme.white};
`;