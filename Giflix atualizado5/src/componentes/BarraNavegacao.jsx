import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrutura para componente React
export function BarraNavegacao(){
    //Todo retorno só pode renderizar um componente 
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to = '/'>
                <li>
                    Home
                    <span className="material-symbols-outlined">home</span>
                </li>
                </Link>
                <Link to ='series'>
                <li>
                    Séries
                    <span className="material-symbols-outlined">
                        theaters
                    </span>
                </li>
                </Link>
                <Link to = 'perfil'>
                <li>
                    Perfil
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </li>
                </Link>
                <Link to = 'favoritos'>
                <li>
                    Favoritos
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                </li>
                </Link>
            </ul>
        </nav>
    )
}