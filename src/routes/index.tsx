import { useAuth } from "@hooks/auth";
import { NavigationContainer, useNavigation as useBaseNavigation } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
	const { usuario } = useAuth();

	return (
		<NavigationContainer>
			{usuario ? <AppRoutes /> : <AuthRoutes />}
		</NavigationContainer>
	)
}