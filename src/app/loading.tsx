"use client"
import { Row } from "antd";
import React from "react";
import { Vortex } from "react-loader-spinner";

const Loading = () => {
  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh", background: "#1a183f" }}>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </Row>
  );
};

export default Loading;
