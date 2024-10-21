import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Pagina1 } from "../pages/Pagina1";
import { Pagina2 } from "../pages/Pagina2";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "../components/ProtectedRoute"; // Importa o componente de rota protegida

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota de Login */}
                <Route path="/login" element={<Login />} />

                {/* Rota raiz redireciona para Login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Rotas protegidas com Layout */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="pagina1" element={<Pagina1 />} />
                        <Route path="pagina2" element={<Pagina2 />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
