"use client";
import React from "react";
import { Col, Row } from "antd";
import FormSelectFields from "../Forms/FormSelectFields";
import {
  acDSemesterOptions,
  acDepartmentOptions,
  acFacultyOptions,
  genderOptions,
} from "@/constant/global";
import FormInput from "../Forms/FormInput";
import UploadImage from "../ui/uploadImage";

const StudentInfoForm = () => {
  return (
    <div
      style={{
        border: "1px solid #ffffff",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Student information
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
            name="student.name.firstName"
            size="large"
            label="First name"
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
            name="student.name.middleName"
            size="large"
            label="Middle name"
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
            name="student.name.lastName"
            size="large"
            label="Last name"
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
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectFields
            size="large"
            name="student.academicSemester"
            options={acDSemesterOptions}
            placeholder="Select an academic semester"
            label="Academic Semester"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectFields
            size="large"
            name="student.academicFaculty"
            options={acFacultyOptions}
            placeholder="Select an academic faculty"
            label="Academic Faculty"
          />
        </Col>

        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectFields
            size="large"
            name="student.academicDepartment"
            options={acDepartmentOptions}
            placeholder="Select an academic department"
            label="Academic Department"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectFields
            size="large"
            name="student.gender"
            options={genderOptions}
            placeholder="Select a gender"
            label="Gender"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfoForm;
