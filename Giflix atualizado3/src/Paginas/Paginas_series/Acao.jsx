import estilos from './Acao.module.css';
import estilo from '../Perfil.module.css';

export function Acao() {
    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Ação para você!</h3>
            </div>
        </main>
    )
}

// import axios from "axios";
// import React, {useState, useEffect} from "react";
// import { Card } from './Card';
// import { Modal } from './Modal';

// const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
// const API_URL = 'https://api.themoviedb.org/3';

// export function Series() {
//     const [series, setSeries] = useState([]);
//     const [selectedSerie, setSelectedSerie] = useState(null);

//     useEffect(() => {
//         axios.get(`${API_URL}/tv/popular?api_key=${API_key}&`)
//         .then(response=>{
//             console.log(response.data.results);
//             setMovies(response.data.results);
//         })
//         .catch(error => {
//             console.log('erro', error);
//         });
//     },[]);

//     const handleOpenModal = (tv) => {
//         setSelectedMovie(tv);
//     }

//     const handleCloseModal = () => {
//         setSelectedMovie(null);
//     }

//     return(
//         <div>
//             <figure>
//                 {movies.map(movie=>(
//                     <Card key={movie.id}
//                     movie={movie}
//                     onOpenModal = {handleOpenModal}
//                     />
//                 ))}
//             </figure>
//             {SelectedMovie && (<Modal movie={SelectedMovie} onClose = {handleCloseModal}/>)} 
//         </div>
//     )
// }

export default Acao; 

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { Modal } from './Modal';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Series() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}`)
            .then(response => {
                console.log(response.data.results);
                setSeries(response.data.results);
            })
            .catch(error => {
                console.log('erro', error);
            });
    }, []);

    const handleOpenModal = (tv) => {
        setSelectedSerie(tv);
    }

    const handleCloseModal = () => {
        setSelectedSerie(null);
    }

    return (
        <div>
            <figure>
                {series.map(serie => (
                    <Card
                        key={serie.id}
                        movie={serie}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {selectedSerie && (
                <Modal movie={selectedSerie} onClose={handleCloseModal} />
            )}
        </div>
    );
}
