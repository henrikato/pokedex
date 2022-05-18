import { PokemonBaseStats, PokemonTypeName } from "@dto/PokemonDTO";
import { Atributo, Atributos, Container, MedidorBackground, Medidores, MedidorValor, Valor, Valores } from "./styles";

type BaseStatsProps = {
	type: PokemonTypeName,
	stats: PokemonBaseStats
}

export default function BaseStats({type, stats}: BaseStatsProps){ 
	
	const calculaValorStat = (valor: number) => ((100 * valor) / 255).toFixed(2);
	
	return (
		<Container>
			<Atributos>
				<Atributo type={type}>HP</Atributo>
				<Atributo type={type}>ATK</Atributo>
				<Atributo type={type}>DEF</Atributo>
				<Atributo type={type}>SATK</Atributo>
				<Atributo type={type}>SDEF</Atributo>
				<Atributo type={type}>SPD</Atributo>
			</Atributos>
			<Valores>
				<Valor>{stats.hp}</Valor>
				<Valor>{stats.atk}</Valor>
				<Valor>{stats.def}</Valor>
				<Valor>{stats.satk}</Valor>
				<Valor>{stats.sdef}</Valor>
				<Valor>{stats.spd}</Valor>
			</Valores>
			<Medidores>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.hp)} />
				</MedidorBackground>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.atk)} />
				</MedidorBackground>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.def)} />
				</MedidorBackground>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.satk)} />
				</MedidorBackground>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.sdef)} />
				</MedidorBackground>
				<MedidorBackground type={type}>
					<MedidorValor type={type} valor={calculaValorStat(stats.spd)} />
				</MedidorBackground>
			</Medidores>
		</Container>
	);
}