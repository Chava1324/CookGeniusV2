// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";
import "../styles/custom.css";

const Hero = ({ onGenerate }) => {
  const ejemplos = [
    "pollo, arroz, jitomate...",
    "pasta, atún, espinaca...",
    "huevo, pan, aguacate...",
    "carne, papa, cebolla...",
    "quinoa, garbanzos, brócoli...",
    "salmón, limón, eneldo...",
    "tortilla, frijoles, queso...",
    "tofu, pimiento, champiñones...",
    "lentejas, zanahoria, apio...",
    "camote, kale, nueces...",
    "maíz, tomate, cilantro...",
    "berenjena, mozzarella, albahaca...",
    "yogur, avena, frutas...",
    "manzana, canela, nueces..."
  ];

  // Estados visibles
  const [placeholder, setPlaceholder] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [animacionActiva, setAnimacionActiva] = useState(true);

  // Refs para evitar problemas en useEffect y mantener estado interno
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const borrandoRef = useRef(false);
  const animRef = useRef(true);
  const intervalRef = useRef(null);

  // Sincronizar referencia con estado
  useEffect(() => { animRef.current = animacionActiva; }, [animacionActiva]);

  // Lógica de tipeo (usa refs para estabilidad)
  useEffect(() => {
    if (!animRef.current) return;

    const tick = () => {
      const texto = ejemplos[idxRef.current];
      if (!borrandoRef.current && charRef.current < texto.length) {
        charRef.current++;
        setPlaceholder(texto.slice(0, charRef.current));
      } else if (borrandoRef.current && charRef.current > 0) {
        charRef.current--;
        setPlaceholder(texto.slice(0, charRef.current));
      } else if (!borrandoRef.current && charRef.current === texto.length) {
        // esperar un segundo antes de borrar
        setTimeout(() => { borrandoRef.current = true; }, 1000);
      } else if (borrandoRef.current && charRef.current === 0) {
        borrandoRef.current = false;
        idxRef.current = (idxRef.current + 1) % ejemplos.length;
      }
    };

    intervalRef.current = setInterval(() => {
      if (animRef.current) tick();
    }, 90);

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // solo una vez al montar

  const detenerAnimacion = () => {
    setAnimacionActiva(false);
    animRef.current = false;
    clearInterval(intervalRef.current);
  };

  const handleChange = (e) => {
    // Si el usuario escribe, detiene la animación y toma su texto
    if (animRef.current) {
      detenerAnimacion();
    }
    setIngredientes(e.target.value);
  };

  const handleSubmit = () => {
    detenerAnimacion();
    const textoAEnviar = ingredientes.trim() !== "" ? ingredientes.trim() : placeholder.replace(/\|$/, "").trim();
    if (!textoAEnviar) return;

    if (typeof onGenerate === "function") {
      onGenerate(textoAEnviar);
    }
    const target = document.getElementById("menu-generator");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  // Mostrar cursor parpadeante cuando la animación está activa
  const displayPlaceholder = animacionActiva ? `${placeholder}|` : "";

  return (
    <section className="hero-section py-5 text-center text-md-start">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <p className="badge bg-success-subtle text-success mb-2">✨ Nuevo en 2025</p>

            <h1 className="display-5 fw-bold mb-2">
              Crea tu menú ideal con <span className="text-primary">IA</span> en segundos
            </h1>

            <p className="lead text-muted mb-3">
              Escribe los ingredientes que tienes y deja que nuestra IA te proponga un menú completo y balanceado.
            </p>

            <Form className="d-flex justify-content-center justify-content-md-start">
              <Form.Control
                type="text"
                // value controlado por usuario; placeholder animado separado
                value={ingredientes}
                placeholder={displayPlaceholder}
                className="form-control-lg shadow-sm border-0"
                onFocus={detenerAnimacion}
                onChange={handleChange}
              />

              <Button
                variant="primary"
                size="lg"
                className="ms-3 px-4"
                onClick={handleSubmit}
              >
                Generar menú 🍲
              </Button>
            </Form>
          </Col>

          <Col md={6} className="text-center">
            <ImageCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
