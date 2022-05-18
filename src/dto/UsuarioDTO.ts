type UsuarioDTO = {
	token: string
	refreshToken: string
	login: string
	usuarioId: number
	usuarioNome: string
	imagem: string
	access_token: string
	exp: number
	iss: string
	iat: number
	expirationDate: Date
}

export default UsuarioDTO;