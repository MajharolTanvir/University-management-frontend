"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import FormTextArea from "@/components/Forms/FormTextArea";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/uploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constant/global";
import { useAdminQuery, useUpdateAdminMutation } from "@/redux/Api/admin";
import { Button, Col, Row, message } from "antd";
import Password from "antd/es/input/Password";
import React from "react";

type IDProps = {
  params: any;
};

const AdminUpdatePage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAdminQuery(id);
  const [updateAdmin] = useUpdateAdminMutation();

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();

    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Updating...");

    try {
      await updateAdmin(formData);
      message.success("Admin added successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Super_admin",
            link: "/super_admin",
          },
          {
            label: "Department",
            link: "/super_admin/admin",
          },
        ]}
      />
      <ActionBar title="Update Admin"></ActionBar>
      <div>
        <Forms submitHandler={onSubmit}>
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
              Admin information
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
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First name"
                  value={data?.name.firstName}
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
                  name="admin.name.middleName"
                  size="large"
                  label="Middle name"
                  value={data?.name.middleName}
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
                  name="admin.name.lastName"
                  size="large"
                  label="Last name"
                  value={data?.name.lastName}
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
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                  value={data?.Password}
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
                  name="admin.gender"
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
                  name="admin.managementDepartment"
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
                <UploadImage name="file" />
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
                  name="admin.email"
                  size="large"
                  label="Email"
                  value={data?.email}
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
                  name="admin.dateOfBirth"
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
                  name="admin.designation"
                  size="large"
                  label="Designation"
                  value={data?.designation}
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
                  name="admin.contactNo"
                  size="large"
                  label="Contact no"
                  value={data?.contactNo}
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
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency contact no"
                  value={data?.emergencyContactNo}
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
                  name="admin.bloodGroup"
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
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                  value={data?.presentAddress}
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
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                  value={data?.permanentAddress}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Forms>
      </div>
    </div>
  );
};

export default AdminUpdatePage;
