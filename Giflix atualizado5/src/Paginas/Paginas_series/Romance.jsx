import estilos from './Romance.module.css';
import estilo from '../Perfil.module.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Modal } from '../../componentes/Modal';
import { CardRomance } from './CardRomance';

export function Romance() {
    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Romance para você!</h3>
                <SeriesRomance />
            </div>
        </main>
    )
}

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function SeriesRomance() {
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
                <CardRomance
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

export default Romance; 