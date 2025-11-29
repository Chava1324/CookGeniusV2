import React from "react";
import { Row, Col } from "react-bootstrap";
import MenuCardCompact from "./MenuCardCompact";

const MenuCardGrid = ({ menus }) => {
  return (
    <Row xs={1} md={3} className="g-3">
      {menus.map((m, i) => (
        <Col key={i}>
          <MenuCardCompact data={m} />
        </Col>
      ))}
    </Row>
  );
};

export default MenuCardGrid;
