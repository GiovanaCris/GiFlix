import estilos from './RodapeNavegacao.module.css';

export function RodapeNavegacao(){
    return(
        <footer className={estilos.container}>
            <nav className={estilos.container}>
                <h1 className={estilos.h1_rodape}>Giflix</h1>
                <ul className={estilos.footer_ul}>
                    <li>O melhor dos filmes</li>
                    <li>Na sua telinha!</li>
                </ul>
            </nav>
        </footer>
    )
}