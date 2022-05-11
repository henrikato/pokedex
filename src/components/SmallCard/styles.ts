import styled from "styled-components/native";

export const Container = styled.View`
	width: 33%;
	flex-direction: column;
	align-items: center;
	border: 1px solid;
	border-radius: 8px;
`;

export const NumeroPokemon = styled.Text`
	font-family: ${({theme}) => theme.fonts.REGULAR};
`;

export const ImagemPokemon = styled.View`
	padding: 16px;
`;

export const NomePokemon = styled.Text`
	font-family: ${({theme}) => theme.fonts.REGULAR};
	color: ${({theme}) => theme.white};
	background-color: ${({theme}) => theme.water};
`;