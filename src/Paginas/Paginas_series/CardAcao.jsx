import estilo from '../../componentes/Card.module.css';

//Modelo do card de ação com as informações desejadas
export function CardAcao({ serie, onOpenModalAcao }) {
    if (!serie) return null; 

    return (
        <div className={estilo.container}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={() => onOpenModalAcao(serie)} />
            <p>Veja mais</p>
        </div>
    );
}