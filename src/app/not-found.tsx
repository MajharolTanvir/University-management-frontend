import { Row } from "antd";
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
      <a href="/">
        <Image src={errorImage} width={600} alt="Error image" />
      </a>
    </Row>
  );
};

export default NotFound;
