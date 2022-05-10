import { ThemeProvider } from "styled-components/native";
import { Container, Text } from "./styles";

import theme from "./src/styles/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Text>Hello, world.</Text>
			</Container>
		</ThemeProvider>
	);
}