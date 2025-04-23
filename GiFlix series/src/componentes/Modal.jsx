import estilos from './Modal.module.css';

export function Modal({ movie, onClose} ){
    if(!movie) {
        return null;
    }
    console.log(movie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                    <div className={estilos.img_text}>
                        <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <p className={estilos.infoModal}>{movie.overview}</p>
                    </div>
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Popularidade: ${movie.popularity}`}</li>
                            <li>{`Data de lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}