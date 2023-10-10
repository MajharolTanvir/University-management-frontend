"use client";

import ACDepartmentField from "@/components/Forms/ACDepartmentField";
import ACFacultyField from "@/components/Forms/ACFacultyField";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import FormTextArea from "@/components/Forms/FormTextArea";
import Forms from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/uploadImage";
import { bloodGroupOptions, genderOptions } from "@/constant/global";
import {
  useAddFacultyWithFormDataMutation,
  useFacultyQuery,
  useUpdateFacultyMutation,
} from "@/redux/Api/facultyApi";

import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditFacultyPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useFacultyQuery(id);
  const [updateFaculty] = useUpdateFacultyMutation(id);
  console.log(data);

  const facultyOnSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Updating...");
    try {
      const res = await updateFaculty(formData);
      if (!!res) {
        message.success("Faculty updated successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
      <Forms submitHandler={facultyOnSubmit}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Faculty information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.name.firstName"
                label="First name"
                size="large"
                value={data?.firstName}
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.name.middleName"
                label="Middle name"
                size="large"
                value={data?.middleName}
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.name.lastName"
                label="Last name"
                size="large"
                value={data?.lastName}
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                type="password"
                name="password"
                label="Password"
                size="large"
                value={data?.password}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectFields
                name="faculty.gender"
                label="Gender"
                options={genderOptions}
                size="large"
                value={data?.gender}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <ACFacultyField
                name="faculty.academicFaculty"
                label="Academic Faculty"
                size="large"
                value={data?.academicFaculty}
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <ACDepartmentField
                name="faculty.academicDepartment"
                label="Academic Department"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <UploadImage name="file" />
            </Col>
          </Row>
        </div>
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="faculty.dateOfBirth"
                label="Date of birth"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectFields
                name="faculty.bloodGroup"
                label="Blood group"
                options={bloodGroupOptions}
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.designation"
                label="Designation"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit">submit</Button>
      </Forms>
    </>
  );
};

export default EditFacultyPage;
