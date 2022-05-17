import styled from "styled-components/native";

export const Container = styled.View`
	flex-direction: row;
	background-color: ${({theme}) => theme.white};
	border-radius: 8px;
	align-items: center;
	margin: 10px 16px;
	margin-left: 32px;
	justify-content: space-between;
	
	elevation: 6;
	shadow-offset: 0px 4px;
	shadow-radius: 4px;
	shadow-opacity: 0.25;
	shadow-color: ${({theme}) => theme.dark_gray};
`;

export const ConteudoSvg = styled.View`
	position: absolute;
	justify-content: center;
	align-items: center;
	margin-left: -24px;
`;

export const ConteudoTexto = styled.View`
	align-items: flex-start;
	justify-content: center;
	margin-left: 87px;
	padding: 8px 0px;
`;

export const Descricao = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const LabelBold = styled.Text`
	font-family: ${({theme}) => theme.fonts.BOLD};
	font-size: 16px;
	color: ${({theme}) => theme.fire};
`;

export const Tipos = styled.View`
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin-top: 8px;
`;

export const Opcao = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Botao = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
`;