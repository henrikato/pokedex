import { createContext } from "react"

type IAuthContext = {
	usuario: string
	autenticarComIAS(): void
	logout(): void
}

const AuthContext = createContext<IAuthContext>({
	usuario: "",
	autenticarComIAS: () => {},
	logout: () => {}
});

export default AuthContext;