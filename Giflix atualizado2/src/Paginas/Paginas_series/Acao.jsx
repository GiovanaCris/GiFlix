import estilos from './Acao.module.css';
import estilo from '../Perfil.module.css';

export function Acao() {
    return(
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Séries de Ação para você!</h3>
            </div>
        </main>
    )
}
export default Acao; 