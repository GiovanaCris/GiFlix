import { Link } from 'react-router-dom';
import estilo from './Perfil.module.css';
import estilos from './Series.module.css';

export function Series() {
    return(
        <main className={estilos.SeriesContainer}>
            <div className={estilo.textperfil}>
                <h3>- Minhas Séries</h3>
            </div>
            <div className={estilos.contSeries}>
                <h2>Escolha o gênero que deseja:</h2>
                <div className={estilos.BotoesSeries}>
                    <Link to= "/romance"><button className={estilos.romance}>ROMANCE</button></Link>
                    <Link to= "/acao"><button className={estilos.acao}>AÇÃO</button></Link>
                    <Link to= "/terror"><button className={estilos.terror}>TERROR</button></Link>
                </div>
            </div>
        </main>
    )
}