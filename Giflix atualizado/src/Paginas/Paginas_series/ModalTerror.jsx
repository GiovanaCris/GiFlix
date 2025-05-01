import estilos from '../../componentes/Modal.module.css';

export function ModalTerror({ serie, onClose} ){
    if(!serie) {
        return null;
    }
    console.log(serie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{serie.name}</h2>
                    <button className={estilos.botaoModal} onClick={onClose}>x</button>
                    <div className={estilos.img_text}>
                        <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
                        <p className={estilos.infoModal}>{serie.overview}</p>
                    </div>
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Popularidade: ${serie.popularity}`}</li>
                            <li>{`Data de lançamento: ${serie.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${serie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}