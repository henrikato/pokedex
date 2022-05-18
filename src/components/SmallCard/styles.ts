import { PokemonTypeName } from "@dto/PokemonDTO";
import styled from "styled-components/native";

type Props = {
	type: PokemonTypeName
}
export const Container = styled.TouchableOpacity<Props>`
	flex: 1;
	margin: 8px;
	flex-direction: column;
	align-items: center;
	border: 1px solid;
	border-radius: 8px;
	border-color: ${({theme, type}) => theme[type]};
`;

export const Codigo = styled.Text<Props>`
	padding: 0 8px;
	padding-top: 4px;
	align-self: flex-end;
	font-family: ${({theme}) => theme.fonts.REGULAR};
	font-size: 14px;
	color: ${({theme, type}) => theme[type]};
`;

export const Nome = styled.Text<Props>`
	align-self: stretch;
	text-align: center;
	padding: 4px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: ${({theme, type}) => theme[type]};
	font-family: ${({theme}) => theme.fonts.REGULAR};
	font-size: 14px;
	color: ${({theme}) => theme.white};
`;