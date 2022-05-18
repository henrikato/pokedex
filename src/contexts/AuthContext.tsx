import UsuarioDTO from "@dto/UsuarioDTO"
import { createContext } from "react"

type IAuthContext = {
	usuario?: UsuarioDTO
	autenticarComIAS(): void
	logout(): void
}

const AuthContext = createContext<IAuthContext>({
	usuario: undefined,
	autenticarComIAS: () => {},
	logout: () => {}
});

export default AuthContext;