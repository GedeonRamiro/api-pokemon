import styles from './styles.module.css'

interface IProps {
    name: string;
}

const PokemonItem: React.FC<IProps> = ({ name }) => {

    return(
        <div className={styles.background}>
            <h2 className={styles.name}>{name}</h2>
        </div>
    )
}

export default PokemonItem