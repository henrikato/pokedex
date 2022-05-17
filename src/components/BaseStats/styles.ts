import { PokemonTypeName } from "@dto/pokemonDTO";
import styled from "styled-components/native";

type Props = {
	type: PokemonTypeName
}
export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Atributos = styled.View`
	align-items: flex-end;
	justify-content: center;
	padding: 5px 12px;
	padding-bottom: 0px;
	border-right-width: 1px;
	border-color: ${({theme}) => theme.light_gray};
`;

export const Atributo = styled.Text<Props>`
	font-family: ${({theme}) => theme.fonts.BOLD};
	color: ${({theme, type}) => theme[type]};
	font-size: 12px;
`;

export const Valores = styled.View`
	align-items: flex-end;
	justify-content: center;
	padding: 5px 12px;
	padding-bottom: 0px;
`;

export const Valor = styled.Text`
	font-family: ${({theme}) => theme.fonts.REGULAR};
	color: ${({theme}) => theme.dark_gray};
	font-size: 12px;
`;

export const Medidores = styled.View`
	flex: 1;
`;

export const MedidorBackground = styled.View<Props>`
	width: 100%;
	background-color: ${({theme, type}) => theme[type]}33;
	height: 4px;
	margin-bottom: 5px;
	margin-top: 10px;
	border-radius: 4px;
`;

type MedidorValorProps = Props & {
	valor: string
}
export const MedidorValor = styled.View<MedidorValorProps>`
	width: ${({ valor }) => valor}%;
	background-color: ${({theme, type}) => theme[type]};
	height: 4px;
	border-radius: 4px;
`;