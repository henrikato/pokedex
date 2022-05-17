import { PokemonTypeName } from "@dto/pokemonDTO";
import styled from "styled-components/native";

type Props = {
	type: PokemonTypeName
}
export const Container = styled.View<Props>`
	padding: 4px 12px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, type }) => theme[type]};
	border-radius: 9999px;
`;

export const Tipo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.BOLD};
	color: ${({ theme }) => theme.white};
	font-size: 16px;
`;