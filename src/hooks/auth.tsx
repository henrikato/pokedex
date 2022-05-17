import { PropsWithChildren, useContext, useState } from "react";
import AuthContext from "@contexts/AuthContext";
import { Alert } from "react-native";

export default function AuthProvider({children}: PropsWithChildren<unknown>) {
	const [usuario, setUsuario] = useState("kato");
	
	const autenticarComIAS = () => Alert.alert("", "succ");

	const logout = () => Alert.alert("", "F");

	return (
		<AuthContext.Provider value={{ usuario, autenticarComIAS, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);