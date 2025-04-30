import estilos from './Terror.module.css';
import estilo from '../Perfil.module.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Modal } from '../../componentes/Modal';
import { CardTerror } from './CardTerror';


export function Terror() {
    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Terror para você!</h3>
                <SeriesTerror />
            </div>
        </main>
    )
}

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function SeriesTerror() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&`)
        .then(response=>{
            console.log(response.data.results);
            setSeries(response.data.results);
        })
        .catch(error => {
            console.log('erro', error);
        });
    },[]);

    const handleOpenModal = (tv) => {
        setSelectedSerie(tv);
    }

    const handleCloseModal = () => {
        setSelectedSerie(null);
    }

    return(
        <div>
            <figure>
                {series.map((serie) => {
                console.log(serie);
                return (
                <CardTerror
                    key={serie.id}
                    serie={serie}
                    onOpenModal={handleOpenModal}
                        />
                    );
                })}
            </figure>
            {selectedSerie && (<Modal serie={selectedSerie} onClose = {handleCloseModal}/>)} 
        </div>
    )
}

export default Terror; 