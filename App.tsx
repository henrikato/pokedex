import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { Poppins_700Bold, Poppins_400Regular } from "@expo-google-fonts/poppins";

import theme from "@assets/styles/theme";
import Routes from "@routes/index";
import AuthProvider from "@hooks/auth";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular
	});

	if (!fontsLoaded) {
		return (
			<View />
		)
	};

	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	);
}