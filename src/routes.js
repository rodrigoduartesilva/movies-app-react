const { default: Inicio } = require("./pages/Inicio/index.js");
import Cabecalho from "components/Cabecalho/index.js";
import Container from "components/Container/index.js";
import Rodape from "components/Rodape/index.js";
import FavoritosProvider from "contexts/FavoritosContext.js";
import Favoritos from "pages/Favoritos/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;