import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";

const MenuCardCompact = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="menu-card-compact shadow-sm"
      onClick={() => setOpen(!open)}
    >
      <div className="title-zone">
        <h6 className="fw-bold mb-1">{data.tipo} — {data.platillo}</h6>
        <span className="small text-muted">
          {data.porciones || "—"} porciones · {data.calorias || "—"} · {data.tiempo || "—"}
        </span>
      </div>

      <Collapse in={open}>
        <div className="detail-zone mt-2">
          <hr />
          <strong>Ingredientes:</strong>
          <ul className="mb-2">
            {data.ingredientes?.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>

          <strong>Pasos:</strong>
          <ol>
            {data.pasos?.map((p, i) => <li key={i}>{p}</li>)}
          </ol>
        </div>
      </Collapse>
    </Card>
  );
};

export default MenuCardCompact;
