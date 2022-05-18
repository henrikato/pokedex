import { PropsWithChildren, useContext, useEffect, useState } from "react";
import AuthContext from "@contexts/AuthContext";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import api from "@services/api";
import UsuarioDTO from "@dto/UsuarioDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL_ACESSO_IAS = 'http://192.168.10.40:91';
const CLIENT_ID = '3f3f15d0-7231-4407-ac94-391e7fa33b2b';
const RESPONSE_TYPE = 'code';
const REDIRECT_URI = 'exp://192.168.10.176:19000';
const USUARIO_KEY_STORAGE = '@pokedex:usuario';

export default function AuthProvider({children}: PropsWithChildren<unknown>) {
	const [usuario, setUsuario] = useState<UsuarioDTO | undefined>();
	
	const getDadosCode = async (code: string) => {
		const { data } = await api.post<UsuarioDTO>("api/token", {
			code,
			grant_type: "authorization_code"
		}, {
			baseURL: "http://192.168.10.40:92"
		});

		return data && data.usuarioId !== 0 ? data : undefined;
	}

	const autenticarComIAS = async () => {
		try {
			const result = await WebBrowser.openAuthSessionAsync(
				URL_ACESSO_IAS +
					"/authorize?clientId=" + CLIENT_ID +
					"&response_type=" + RESPONSE_TYPE +
					"&redirect_uri=" + REDIRECT_URI,
				REDIRECT_URI
			);

			if(result.type === "success") {
				const { queryParams } = Linking.parse(result.url);
				const code = queryParams["code"];
				const usuarioIAS = await getDadosCode(code);
				setUsuario(usuarioIAS);
				
				await AsyncStorage.setItem(USUARIO_KEY_STORAGE, JSON.stringify(usuarioIAS));
			}
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		await AsyncStorage.removeItem(USUARIO_KEY_STORAGE);
		setUsuario(undefined);
	};

	useEffect(() => {
		async function consultaUsuarioStorage() {
			const usuarioStorage = await AsyncStorage.getItem(USUARIO_KEY_STORAGE);
			if(usuarioStorage) {
				const usuarioParse = JSON.parse(usuarioStorage);
				setUsuario(usuarioParse);
			}
		}
		
		consultaUsuarioStorage();
	}, []);

	return (
		<AuthContext.Provider value={{ usuario, autenticarComIAS, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);