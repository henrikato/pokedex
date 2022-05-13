import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "@screens/Detalhes";
import Home from "@screens/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detalhes" component={Detalhes} /> 
		</Stack.Navigator>
	)
}