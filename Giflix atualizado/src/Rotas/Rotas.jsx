import {Routes, Route} from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { Perfil } from "../Paginas/Perfil";
import { Series } from "../Paginas/Series";
import { Favoritos } from "../Paginas/favoritos";
import { Lista } from "../componentes/Lista";

export function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element =  {<Lista/>}/>
                <Route path = 'perfil' element={<Perfil/>}/>
                <Route path = 'series' element={<Series/>}/>
                <Route path= 'favoritos' element={<Favoritos/>}/>
            </Route>
        </Routes>
    )
}