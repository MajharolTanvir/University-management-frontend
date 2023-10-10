"use client";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/Api/department";
import { departmentSchema } from "@/schemas/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...")
    try {
      await addDepartment(data);
      message.success("Department added successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Department",
            link: "/admin/department",
          },
        ]}
      />
       <ActionBar title="Create Department"></ActionBar>
      <div>
        <Forms
          submitHandler={onSubmit}
          resolver={yupResolver(departmentSchema)}
        >
          <div
            style={{
              marginBottom: "10px",
            }}
          >
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
                  name="title"
                  size="large"
                  label="Title"
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

export default CreateDepartment;
