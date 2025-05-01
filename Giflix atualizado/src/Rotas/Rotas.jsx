import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { Perfil } from "../Paginas/Perfil";
import { Series } from "../Paginas/Series";
import { Lista } from "../componentes/Lista";
import { Romance }  from "../Paginas/Paginas_series/Romance";
import { Acao } from "../Paginas/Paginas_series/Acao";
import { Terror } from "../Paginas/Paginas_series/Terror";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Inicial />}>
        <Route index element={<Lista />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="series" element={<Series />} />
      <Route path="/romance" element={<Romance />} />
      <Route path="/acao" element={<Acao />} />
      <Route path="/terror" element={<Terror />} />
      </Route>
    </Routes>
  );
}
