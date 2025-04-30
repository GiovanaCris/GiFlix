import estilo from '../../componentes/Card.module.css';

export function CardAcao({ serie, onOpenModal }) {
    if (!serie) return null; 

    return (
        <div className={estilo.container}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={() => onOpenModal(serie)} />
            <p>Veja mais</p>
        </div>
    );
}