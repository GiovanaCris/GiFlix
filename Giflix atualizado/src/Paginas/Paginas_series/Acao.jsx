import estilo from '../Perfil.module.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { ModalAcao } from './ModalAcao';
import { CardAcao } from './CardAcao';

export function Acao() {    
    return (
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Ação para você!</h3>
                <SeriesAcao /> 
            </div>
        </main>
    );
}

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function SeriesAcao() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    //Importação de séries de ação, filtrando da api, o ID do gênero acão é 10759
    useEffect(() => {
        axios.get(`${API_URL}/discover/tv?api_key=${API_key}&with_genres=10759&language=pt-BR`)
        .then(response => {
            console.log(response.data.results);
            setSeries(response.data.results);
        })
        .catch(error => {
            console.log('erro', error);
        });
    }, []);
    

    const handleOpenModalAcao = (tv) => {
        setSelectedSerie(tv);
    }

    const handleCloseModalAcao = () => {
        setSelectedSerie(null);
    }

    return(
        <div>
            <figure>
                {series.map((serie) => {
                console.log(serie);
                return (
                <CardAcao
                    key={serie.id}
                    serie={serie}
                    onOpenModalAcao={handleOpenModalAcao}
                        />
                    );
                })}
            </figure>
            {selectedSerie && (<ModalAcao serie={selectedSerie} onClose = {handleCloseModalAcao}/>)} 
        </div>
    )
}

export default Acao; 