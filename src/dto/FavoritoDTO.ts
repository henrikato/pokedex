import PokemonDTO from "./PokemonDTO"
import UsuarioDTO from "./UsuarioDTO"

type FavoritoDTO = {
	id: number
	pokemon: PokemonDTO
	usuario: UsuarioDTO
}

export const FAVORITOS_KEY = "@pokedex:favoritos";

export default FavoritoDTO;