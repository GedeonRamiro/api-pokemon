
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import styles from './styles.module.css'



interface IPokemon{
    height: number;
    weight: number;
    name: string;
    abilities: { ability: {name: string,} }[]
    types: { type: {name: string} }[]
    sprites: { other: {'official-artwork': {front_default: string} } }

}

interface IParams {
    pokemon: string;
}

const Pokemon: React.FC = () => {

    const [pokemon, setPokemon] = useState<IPokemon>()

    const { pokemon: pokemonName } = useParams<IParams>()

    const getInfoPokemon = async () => {
        const { data } = await api.get<IPokemon>(`pokemon/${pokemonName}`)
        setPokemon(data)
    }

    useEffect(() => {
        getInfoPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Págida do pokemon { pokemon?.name }</h1>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
            <h2 className={styles.card}>Altura: {pokemon?.height}</h2>
            <h2 className={styles.card}>Peso: {pokemon?.weight}</h2>
            <h2 className={styles.card}>habilidades: {pokemon?.abilities.map(ability => ability.ability.name).join(' | ')}</h2>
            <h2 className={styles.card}>Tipos: {pokemon?.types.map(type => type.type.name).join(' | ')}</h2>
            <Link to='/'>
                <button className={styles.button}>Voltar</button>
            </Link>
        </div>
    )
}

export default Pokemon;