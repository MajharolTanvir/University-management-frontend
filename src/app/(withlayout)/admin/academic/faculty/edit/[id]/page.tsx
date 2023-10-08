"use client";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAcademicFacultyQuery, useUpdateAcademicFacultyMutation } from "@/redux/Api/Academic/facultyApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const EditFaculty = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAcademicFacultyQuery(id);
  const [updateDepartment] = useUpdateAcademicFacultyMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department updated successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "Faculty",
            link: "/admin/academic/faculty",
          },
        ]}
      />

      <ActionBar title="Update academic faculty"></ActionBar>
      <Forms submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="title" label="Title" />
          </Col>
        </Row>

        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </Forms>
    </div>
  );
};

export default EditFaculty;
