"use client";

import FormInput from "@/components/Forms/FormInput";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import { ISelectFieldOptions } from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddCourseMutation, useCoursesQuery } from "@/redux/Api/course";
import { Button, Col, Row, message } from "antd";

const CreateCoursePage = () => {
  const [addCourse] = useAddCourseMutation();

  const { data, isLoading } = useCoursesQuery({ limit: 10, page: 1 });

  const courses = data?.courses;
  const coursesOptions = courses?.map(
    (course: { title: string; id: string }) => {
      return {
        label: course?.title,
        value: course?.id,
      };
    }
  );

  const onSubmit = async (data: any) => {
    data.credits = parseInt(data?.credits);

    const coursePreRequisitesOptions = data?.preRequisiteCourses?.map(
      (id: string) => {
        return {
          courseId: id,
        };
      }
    );

    data.preRequisiteCourses = coursePreRequisitesOptions;

    message.loading("Creating.....");
    try {
      const res = await addCourse(data).unwrap();
      if (res?.id) {
        message.success("Course created successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "course", link: `/${base}/course` },
        ]}
      />
      <h1>Create Course</h1>
      <Forms submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="title" label="Title" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="code" label="Course Code" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="credits" label="Course Credits" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormMultiSelectField
                options={coursesOptions as ISelectFieldOptions[]}
                name="preRequisiteCourses"
                label="Pre Requisite Courses"
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Forms>
    </div>
  );
};

export default CreateCoursePage;
