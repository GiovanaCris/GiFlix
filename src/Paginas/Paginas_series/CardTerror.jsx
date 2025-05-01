import estilo from '../../componentes/Card.module.css';

//Modelo do card de Terror com as informações desejadas
export function CardTerror({ serie, onOpenModalTerror }) {
    if (!serie) return null; 

    return (
        <div className={estilo.container}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={() => onOpenModalTerror(serie)} />
            <p>Veja mais</p>
        </div>
    );
}