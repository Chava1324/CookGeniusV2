import React from "react";
import { FaUtensils } from "react-icons/fa";
import LightBubblesBackground from "./LightBubblesBackground";

const DivisorElegante = () => {
    return (
        <div
            data-aos="fade-up"
            style={{
                width: "100%",
                padding: "100px 20px",
                background: "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "60px",
                marginBottom: "60px",
                position: "relative",
                overflow: "hidden", // IMPORTANTE para las burbujas
                borderRadius: "0",
            }}
        >
            {/* Fondo animado */}
            <LightBubblesBackground />

            <div
                data-aos="zoom-in"
                data-aos-delay="200"
                style={{
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "40px 50px",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    maxWidth: "850px",
                    position: "relative",
                    zIndex: 10, // Esto hace que pase ENCIMA de las burbujas
                }}
            >
                <FaUtensils
                    size={50}
                    style={{
                        marginBottom: "20px",
                        color: "white",
                        filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.25))",
                    }}
                />

                <h2
                    data-aos="fade-up"
                    data-aos-delay="350"
                    style={{
                        fontWeight: "700",
                        fontSize: "2.4rem",
                        lineHeight: "1.3",
                        marginBottom: "10px",
                        color: "#fff",
                        textShadow: "0 3px 10px rgba(0,0,0,0.3)",
                    }}
                >
                    Inspiración para cada platillo.
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="450"
                    style={{
                        fontSize: "1.1rem",
                        color: "rgba(255,255,255,0.9)",
                        marginTop: "10px",
                        fontWeight: "300",
                    }}
                >
                    Tus ingredientes tienen más potencial del que crees.
                    Descubre combinaciones deliciosas generadas especialmente para ti.
                </p>
            </div>
        </div>
    );
};

export default DivisorElegante;
