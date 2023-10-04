import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";

const StudentLocalGuardianInfoForm = () => {
  return (
    <div
      style={{
        border: "1px solid #ffffff",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Local guardian information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardian.name"
            size="large"
            label="Local guardian Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardian.occupation"
            size="large"
            label="Local guardian occupation"
          />
        </Col>

        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardian.contactNo"
            size="large"
            label="Local guardian contact no"
          />
        </Col>

        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.localGuardian.address"
            size="large"
            label="Local guardian address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentLocalGuardianInfoForm;
