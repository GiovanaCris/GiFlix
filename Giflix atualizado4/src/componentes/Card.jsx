import estilo from './Card.module.css';

// export function Card({ movie, onOpenModal }){
//     return(
//         <div className={estilo.container}>
//             <h3>{movie.title}</h3>
//             <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={()=>onOpenModal(movie)}/>
//             <p>Veja mais</p>
//         </div>
//     );
// }

export function Card({ serie, onOpenModal }){
    return(
        <div className={estilo.container}>
            <h3>{serie.title}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={()=>onOpenModal(serie)}/>
            <p>Veja mais</p>
        </div>
    );
}