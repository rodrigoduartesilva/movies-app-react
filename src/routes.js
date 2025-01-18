const { default: Inicio } = require("./pages/Inicio/index.js");
import ErrorPage from "pages/ErrorPage/index.js";
import Favoritos from "pages/Favoritos/index.js";
import PaginaBase from "pages/PaginaBase/index.js";
import Player from "pages/Player/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;