import estilos from './Terror.module.css';
import estilo from '../Perfil.module.css';

export function Terror() {
    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Terror para você!</h3>
            </div>
        </main>
    )
}
export default Terror; 