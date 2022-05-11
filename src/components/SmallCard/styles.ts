import styled from "styled-components/native";

export const Container = styled.View`
	width: 104px;
	height: 112px;
	margin: 8px;
	flex-direction: column;
	align-items: center;
	border: 1px solid;
	border-radius: 8px;
	border-color: ${({theme}) => theme.water};
`;

export const NumeroPokemon = styled.Text`
	margin: 0 8px;
	margin-top: 4px;
	align-self: flex-end;
	font-family: ${({theme}) => theme.fonts.REGULAR};
	font-size: 8px;
	color: ${({theme}) => theme.water};
`;

export const ImagemPokemon = styled.View`

`;

export const NomePokemon = styled.Text`
	align-self: stretch;
	text-align: center;
	padding: 4px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: ${({theme}) => theme.water};
	font-family: ${({theme}) => theme.fonts.REGULAR};
	font-size: 10px;
	color: ${({theme}) => theme.white};
`;