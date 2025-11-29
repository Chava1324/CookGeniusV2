// src/components/MenuGenerator.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Spinner, Alert } from "react-bootstrap";
import MenuCardGrid from "./MenuCardGrid";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

const MenuGenerator = ({ ingredientes }) => {
    const [menu, setMenu] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMenu = async (ingredientesTexto) => {
        if (!ingredientesTexto || ingredientesTexto.trim() === "") {
            setError("No hay ingredientes para generar el menú.");
            setMenu(null);
            return;
        }

        setLoading(true);
        setError(null);
        setMenu(null);

        try {
            const resp = await axios.post(
                `${API_BASE}/menus`,
                { ingredientes: ingredientesTexto },
                { headers: { "Content-Type": "application/json" }, timeout: 30000 }
            );

            if (resp.data?.menus) {
                setMenu(resp.data);
                return;
            }

            if (resp.data?.choices) {
                const raw = resp.data.choices[0]?.message?.content || "";
                try {
                    setMenu(JSON.parse(raw));
                } catch {
                    setMenu({ raw });
                    setError("La IA no devolvió JSON válido.");
                }
                return;
            }

            if (typeof resp.data === "string") {
                try {
                    setMenu(JSON.parse(resp.data));
                } catch {
                    setMenu({ raw: resp.data });
                    setError("Respuesta inesperada del servidor.");
                }
                return;
            }

            setMenu(resp.data);
        } catch (err) {
            console.error(err);
            setError("Error al contactar el servidor.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!ingredientes?.trim()) return;
        const t = setTimeout(() => fetchMenu(ingredientes), 300);
        return () => clearTimeout(t);
    }, [ingredientes]);

    return (
        <section className="py-5 bg-light">
            <Container>
                <h2 className="mb-4 fw-bold text-center">Resultados del menú</h2>

                {loading && (
                    <div className="text-center my-4">
                        <Spinner animation="border" variant="success" />
                        <div className="mt-2">Generando menú con IA...</div>
                    </div>
                )}

                {error && <Alert variant="danger">{error}</Alert>}

                {!loading && !menu && !error && (
                    <p className="text-center text-muted">
                        Introduce ingredientes y presiona “Generar menú”.
                    </p>
                )}

                {/* AQUÍ EL GRID – SOLO UNA VEZ */}
                {menu?.menus && (
                    <MenuCardGrid menus={menu.menus} />
                )}

                {menu?.raw && (
                    <pre className="mt-4 p-3 bg-white rounded-3 shadow-sm">
                        {JSON.stringify(menu.raw, null, 2)}
                    </pre>
                )}
            </Container>
        </section>
    );
};

export default MenuGenerator;
