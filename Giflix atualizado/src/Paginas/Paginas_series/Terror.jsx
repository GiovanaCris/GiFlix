import estilo from '../Perfil.module.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { ModalTerror } from './ModalTerror';
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

    //Importação de séries de Terror, filtrando da api, o ID do gênero Mistério é 9648 e o do gênero Sci-fi e fantasia é 10765
    useEffect(() => {
        axios.get(`${API_URL}/discover/tv?api_key=${API_key}&with_genres=9648,10765&language=pt-BR`)
        .then(response => {
            console.log(response.data.results);
            setSeries(response.data.results);
        })
        .catch(error => {
            console.log('erro', error);
        });
    }, []);

    const handleOpenModalTerror = (tv) => {
        setSelectedSerie(tv);
    }

    const handleCloseModalTerror = () => {
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
                    onOpenModalTerror={handleOpenModalTerror}
                        />
                    );
                })}
            </figure>
            {selectedSerie && (<ModalTerror serie={selectedSerie} onClose = {handleCloseModalTerror}/>)} 
        </div>
    )
}

export default Terror; 