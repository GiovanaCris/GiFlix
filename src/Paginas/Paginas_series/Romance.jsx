import estilo from '../Perfil.module.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { ModalRomance } from './ModalRomance';
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

    //Importação de séries de Romance, filtrando da api, o ID do gênero romance é 10759
    useEffect(() => {
        axios.get(`${API_URL}/discover/tv?api_key=${API_key}&with_genres=10749&language=pt-BR`)
        .then(response => {
            console.log(response.data.results);
            setSeries(response.data.results);
        })
        .catch(error => {
            console.log('erro', error);
        });
    }, []);

    const handleOpenModalRomance = (tv) => {
        setSelectedSerie(tv);
    }

    const handleCloseModalRomance = () => {
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
                    onOpenModalRomance={handleOpenModalRomance}
                        />
                    );
                })}
            </figure>
            {selectedSerie && (<ModalRomance serie={selectedSerie} onClose = {handleCloseModalRomance}/>)} 
        </div>
    )
}

export default Romance; 