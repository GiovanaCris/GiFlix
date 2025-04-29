import estilos from './Acao.module.css';
import estilo from '../Perfil.module.css';
import React, {useState, useEffect} from "react";

export function Acao() {

    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Ação para você!</h3>
            </div>
        </main>
    )
}

// import estilo from '../../../componentes/Card.module.css';

// export function Card({ serie, onOpenModal }){
//     return(
//         <div className={estilo.container}>
//             <h3>{serie.title}</h3>
//             <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} onClick={()=>onOpenModal(serie)}/>
//             <p>Veja mais</p>
//         </div>
//     );
// }

export default Acao;

// const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
// const API_URL = 'https://api.themoviedb.org/3';

// export function Series() {
//     const [series, setSeries] = useState([]);
//     const [selectedSerie, setSelectedSerie] = useState(null);

//     useEffect(() => {
//         axios.get(`${API_URL}/tv/popular?api_key=${API_key}&`)
//         .then(response=>{
//             console.log(response.data.results);
//             setSeries(response.data.results);
//         })
//         .catch(error => {
//             console.log('erro', error);
//         });
//     },[]);

//     const handleOpenModal = (tv) => {
//         setSelectedSerie(tv);
//     }

//     const handleCloseModal = () => {
//         setSelectedSerie(null);
//     }

//     return(
//         <div>
//             <figure>
//                 {series.map(serie=>(
//                     <Card key={serie.id}
//                     serie={serie}
//                     onOpenModal = {handleOpenModal}
//                     />
//                 ))}
//             </figure>
//             {selectedSerie && (<Modal serie={selectedSerie} onClose = {handleCloseModal}/>)} 
//         </div>
//     )
// }

// export default Series; 