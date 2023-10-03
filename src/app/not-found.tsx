import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import errorImage from "../assets/Error.gif";

const NotFound = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#1a183f" }}
    >
      <Col>
        <Image src={errorImage} width={600} alt="Error image" />
        <h3 style={{ textAlign: "center" }}>
          <a href="/">Go back to home page</a>
        </h3>
      </Col>
    </Row>
  );
};

export default NotFound;
