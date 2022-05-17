import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/Login";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
}