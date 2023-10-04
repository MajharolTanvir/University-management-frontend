"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import FormTextArea from "@/components/Forms/FormTextArea";
import Forms from "@/components/Forms/Forms";
import UploadImage from "@/components/ui/uploadImage";
import {
    acFacultyOptions,
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constant/global";
import { facultySchema } from "@/schemas/facultySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateFaculty = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: "cursive", margin: "10px 0px" }}>
        Create faculty
      </h1>
      <div>
        <Forms submitHandler={onSubmit} resolver={yupResolver(facultySchema)}>
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
              Faculty information
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
                  name="faculty.name.firstName"
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
                  name="faculty.name.middleName"
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
                  name="faculty.name.lastName"
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
                  name="faculty.gender"
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
                <FormSelectFields
                  size="large"
                  name="faculty.academicDepartment"
                  options={departmentOptions}
                  placeholder="Select a Department"
                  label="Department"
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
                  name="faculty.academicFaculty"
                  options={acFacultyOptions}
                  placeholder="Select a Faculty"
                  label="Faculty"
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
          {/* Basic info */}
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
              Basic information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="faculty.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  label="Date of Birth"
                  name="faculty.dateOfBirth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="faculty.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="number"
                  name="faculty.contactNo"
                  size="large"
                  label="Contact no"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="number"
                  name="faculty.emergencyContactNo"
                  size="large"
                  label="Emergency contact no"
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
                  name="faculty.gender"
                  options={bloodGroupOptions}
                  placeholder="Select a Blood group"
                  label="Blood group"
                />
              </Col>

              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  name="faculty.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  name="faculty.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Forms>
      </div>
    </div>
  );
};

export default CreateFaculty;
