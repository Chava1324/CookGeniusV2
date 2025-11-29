import React from "react";
import { FaLeaf, FaFireAlt, FaUtensilSpoon, FaClock, FaCarrot, FaSnowflake } from "react-icons/fa";

const tips = [
    {
        icon: <FaLeaf size={28} />,
        titulo: "Aprovecha tus ingredientes",
        descripcion: "Las verduras maduras pueden convertirse en caldos, cremas o bases para sopas. Nada se desperdicia.",
    },
    {
        icon: <FaFireAlt size={28} />,
        titulo: "Controla el fuego",
        descripcion: "Cocinar a fuego medio da más sabor y evita quemar los ingredientes sin cocinarlos por dentro.",
    },
    {
        icon: <FaUtensilSpoon size={28} />,
        titulo: "Sazona en capas",
        descripcion: "Agrega sal y especias en diferentes fases de la cocción para potenciar el sabor final.",
    },
    {
        icon: <FaClock size={28} />,
        titulo: "Deja reposar tu comida",
        descripcion: "Después de cocinar carne o pasta, deja reposar unos minutos para que los sabores se integren.",
    },
    {
        icon: <FaCarrot size={28} />,
        titulo: "Corta en tamaños iguales",
        descripcion: "Los ingredientes uniformes se cocinan de forma pareja y mejoran la presentación.",
    },
    {
        icon: <FaSnowflake size={28} />,
        titulo: "Congela inteligentemente",
        descripcion: "Divide en porciones pequeñas para descongelar solo lo necesario, sin desperdicios.",
    }
];

const TipsDeCocina = () => {
    return (
        <section
            style={{
                padding: "80px 20px",
                background: "#FAFAFA",
            }}
        >
            <h2
                data-aos="fade-up"
                className="text-center"
                style={{
                    fontSize: "2.3rem",
                    fontWeight: "700",
                    color: "#212121",
                    marginBottom: "40px",
                }}
            >
                Tips de cocina para mejorar cada platillo
            </h2>

            <div
                className="tips-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "25px",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {tips.map((t, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={100 * i}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            padding: "24px",
                            background: "white",
                            borderRadius: "18px",
                            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.05)",
                        }}
                    >
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#4CAF50",
                                borderRadius: "14px",
                                color: "white",
                                flexShrink: 0,
                            }}
                        >
                            {t.icon}
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    marginBottom: "6px",
                                    color: "#212121",
                                }}
                            >
                                {t.titulo}
                            </h4>
                            <p
                                style={{
                                    fontSize: "0.95rem",
                                    color: "#555",
                                    margin: 0,
                                }}
                            >
                                {t.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TipsDeCocina;
