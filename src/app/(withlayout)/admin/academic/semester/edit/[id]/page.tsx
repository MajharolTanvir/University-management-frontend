'use client'
import FormSelectFields from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import FormYearPicker from "@/components/Forms/FormsYearPicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { acSemesterOptions, monthOptions } from "@/constant/global";
import {
  useAcademicSemesterQuery,
  useUpdateAcademicSemesterMutation,
} from "@/redux/Api/Academic/semesterApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const UpdateSemester = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAcademicSemesterQuery(id);
  const [updateAcademicSemester] = useUpdateAcademicSemesterMutation();

  const onSubmit = async (data: any) => {
    if (data?.title == "Autumn") data["code"] = "01";
    else if (data?.title == "Summer") data["code"] = "02";
    else data["code"] = "03";

    data.year = parseInt(data.year);

    // console.log(data);

    message.loading("Updating.....");
    try {
      const res = updateAcademicSemester({ id, body: data });
      if (!!res) {
        message.success("Academic Semester Updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic", link: `/${base}/academic` },
          { label: "semester", link: `/${base}/academic/semester` },
        ]}
      />
      <h1>Update Academic Semester</h1>
      <Forms submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0" }}>
              <FormSelectFields
                size="large"
                name="title"
                options={acSemesterOptions}
                label="Title"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormSelectFields
                size="large"
                name="startMonth"
                options={monthOptions}
                label="Start Month"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormSelectFields
                size="large"
                name="endMonth"
                options={monthOptions}
                label="End Month"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormYearPicker name="year" label="Year" picker="year" />
            </div>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Forms>
    </div>
  );
};

export default UpdateSemester;
