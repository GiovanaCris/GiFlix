import estilo from './Perfil.module.css';
import estilos from './Series.module.css';

export function Series() {
    return(
        <main className={estilos.container}>
            <div className={estilo.textperfil}>
                <h3>- Minhas Séries</h3>
            </div>
        </main>
    )
}