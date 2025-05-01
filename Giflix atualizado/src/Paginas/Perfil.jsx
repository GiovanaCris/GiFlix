import estilo from './Perfil.module.css';

export function Perfil() {
    return(
        <>
        <main className={estilo.container}>
            <div className={estilo.textperfil}>
                <h3>- Meu Perfil</h3>
            </div>

            <h4 className={estilo.user}>
                    <span className={estilo.bold}>Hello World</span> GiovanaC!
            </h4>
            
            <div className={estilo.infouser}>
                <div className={estilo.imgperfil}>
                    <img src="/foto perfil.jpeg" alt="Foto de perfil"/>
                </div>

                <div className={estilo.dadosuser}>
                    <div className={estilo.dados}>
                        <p className={estilo.nameuser}>
                        <span className={estilo.bold}>Nome:</span> Giovana Cristina Brito Pereira
                        </p>

                        <p className={estilo.emailuser}>
                        <span className={estilo.bold}>Email:</span> usuario@teste.com
                        </p>

                        <p className={estilo.planouser}>
                        <span className={estilo.bold}>Plano:</span> Premium
                        </p>
                    </div>
                    <div className={estilo.usabilidades}>
                        <ul>
                            <li className={estilo.bold}>Configurações</li>
                            <li className={estilo.bold}>Privacidade</li>
                            <li className={estilo.bold}>Termos de uso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}