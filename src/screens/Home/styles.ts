import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	gap: 16px;
	padding: 16px;
	background-color: ${({theme}) => theme.background};
`;

export const Header = styled.View`
	width: 100%;
	padding: 0 8px;
	margin-top: 44px;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`;

export const ConteudoTitulo = styled.View`
	flex-direction: row;
	flex-grow: 1;
	align-items: center;
`;

export const Titulo = styled.Text`
	margin-left: 16px;
	font-family: ${({theme}) => theme.fonts.BOLD};
	font-size: 24px;
	color: ${({theme}) => theme.dark_gray};
`;

export const BotaoOrdenacao = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
`;

export const InputTexto = styled.TextInput`
	padding: 4px 10px;
	background-color: ${({theme}) => theme.white};
	border: 1px solid ${({theme}) => theme.ligth_gray};
	border-radius: 8px;
`;

export const Lista = styled.ScrollView`
	margin: 8px 0;
`;