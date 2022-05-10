import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.ice};
	justify-content: center;
	align-items: center;
`;

export const Text = styled.Text`
	font-weight: bold;
	color: ${({theme}) => theme.fighthing};
	font-size: 20px;
	font-family: monospace;
`;