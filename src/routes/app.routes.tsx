import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "@screens/Detalhes";
import Favoritos from "@screens/Favoritos";
import Home from "@screens/Home";
import Perfil from "@screens/Perfil";
import { useTheme } from "styled-components";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={Home} />
			<Stack.Screen name="Detalhes" component={Detalhes} />
		</Stack.Navigator>
	);
}

function FavoritosStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="FavoritosScreen" component={Favoritos} />
		</Stack.Navigator>
	)
}

function PerfilStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="PerfilScreen" component={Perfil} />
		</Stack.Navigator>
	)
}

export default function AppRoutes() {
	const theme = useTheme();

	return (
		<Tab.Navigator screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: theme.primary,
			tabBarInactiveTintColor: theme.light_gray,
			tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" }
		}}>
			<Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: props => <MaterialCommunityIcons name="pokeball" {...props} /> }} />
			<Tab.Screen name="Favoritos" component={FavoritosStack} options={{ tabBarIcon: props => <MaterialCommunityIcons name="star-outline" {...props} /> }} />
			<Tab.Screen name="Perfil" component={PerfilStack} options={{ tabBarIcon: props => <MaterialCommunityIcons name="account-outline" {...props} /> }} />
		</Tab.Navigator>
	);
}