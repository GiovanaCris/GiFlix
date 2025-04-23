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
                    <span class="material-symbols-outlined">home</span>
                </li>
                </Link>
                <Link to ='series'>
                <li>
                    Séries
                    <span class="material-symbols-outlined">
                        theaters
                    </span>
                </li>
                </Link>
                <Link to = 'perfil'>
                <li>
                    Perfil
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </li>
                </Link>
                <li>
                    Favoritos
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </li>
            </ul>
        </nav>
    )
}