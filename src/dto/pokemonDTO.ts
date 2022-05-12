interface PokemonDTO {
	id: number,
	code: number,
	name: string,
	about: PokemonAbout,
	moves: Array<PokemonMove>,
	base_stats: PokemonBaseStats,
	types: Array<PokemonType>
}

interface PokemonAbout {
	weight: string,
	height: string,
	description: string
}

interface PokemonMove {
	id: number,
	name: string
}

interface PokemonBaseStats {	
	hp: string,
	atk: string,
	def: string,
	satk: string,
	sdef: string,
	spd: string
}

interface PokemonType {
	id: number,
	name: string
}

export default PokemonDTO;