import estilos from './Cabecalho.module.css';
//Estrutura básica para os componentes
export function Cabecalho(){ //deve ser o msm nome do arquivo
    return(
        <header className={estilos.container}>
            <h1>Giflix</h1>
        </header>
    )
}