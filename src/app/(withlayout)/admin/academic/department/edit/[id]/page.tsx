"use client";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields, {
  ISelectFieldOptions,
} from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicDepartmentQuery,
  useUpdateAcademicDepartmentMutation,
} from "@/redux/Api/Academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/Api/Academic/facultyApi";

import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const EditAcademicDepartment = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAcademicDepartmentQuery(id);
    const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();
    
    const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
        await updateAcademicDepartment({ id, body: values });
      message.success("Academic Department updated successfully");
    } catch (error: any) {
        message.error(error.message);
    }
  };

  const { data: facultiesData } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = facultiesData?.academicFaculties;
  const acFacultiesOptions = academicFaculties?.map(
    (faculty: { title: string; id: string }) => {
      return {
        label: faculty?.title,
        value: faculty?.id,
      };
    }
  );

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "Department",
            link: "/admin/academic/department",
          },
        ]}
      />

      <ActionBar title="Update academic faculty"></ActionBar>
      <Forms submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Academic Department Title"
              value={data?.title}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectFields
              size="large"
              name="academicFacultyId"
              options={acFacultiesOptions as ISelectFieldOptions[]}
              label="Academic Faculty"
              placeholder="Select"
              defaultValue={data?.academicFaculty?.title}
            />
          </Col>
        </Row>

        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </Forms>
    </div>
  );
};

export default EditAcademicDepartment;
