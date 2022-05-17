interface PokemonDTO {
	id: number,
	code: number,
	name: string,
	about: PokemonAbout,
	moves: Array<PokemonMove>,
	base_stats: PokemonBaseStats,
	types: Array<PokemonType>
}

export interface PokemonAbout {
	weight: string,
	height: string,
	description: string
}

export interface PokemonMove {
	id: number,
	name: string
}

export interface PokemonBaseStats {	
	hp: number,
	atk: number,
	def: number,
	satk: number,
	sdef: number,
	spd: number
}

export interface PokemonType {
	id: number,
	name: PokemonTypeName
}

export const enum PokemonTypeName {
	rock = "rock",
	ghost = "ghost",
	steel = "steel",
	water = "water",
	grass = "grass",
	psychic = "psychic",
	ice = "ice",
	dark = "dark",
	fairy = "fairy",
	normal = "normal",
	fighthing = "fighthing",
	flying = "flying",
	poison = "poison",
	ground = "ground",
	bug = "bug",
	fire = "fire",
	electric = "electric",
	dragon = "dragon"
}

export default PokemonDTO;