import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import { Modal } from './Modal';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Series() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&`)
        .then(response=>{
            console.log(response.data.results);
            setMovies(response.data.results);
        })
        .catch(error => {
            console.log('erro', error);
        });
    },[]);

    const handleOpenModal = (tv) => {
        setSelectedMovie(tv);
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
    }

    return(
        <div>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie && (<Modal movie={SelectedMovie} onClose = {handleCloseModal}/>)} 
        </div>
    )
}