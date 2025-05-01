import estilo from '../../componentes/Card.module.css';

//Modelo do card de Romance com as informações desejadas
export function CardRomance({ serie, onOpenModalRomance }) {
    if (!serie) return null; 

    return (
        <div className={estilo.container}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={() => onOpenModalRomance(serie)} />
            <p>Veja mais</p>
        </div>
    );
}