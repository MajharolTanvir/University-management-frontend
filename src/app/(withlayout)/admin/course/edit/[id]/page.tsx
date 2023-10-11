"use client";
import FormInput from "@/components/Forms/FormInput";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import { ISelectFieldOptions } from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useCourseQuery,
  useCoursesQuery,
  useUpdateCourseMutation,
} from "@/redux/Api/course";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const EditCourse = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useCourseQuery(id);
  const [updateCourse] = useUpdateCourseMutation();
  const course = data?.preRequisite?.map(
    (courses: { preRequisite: { title: any } }) => courses?.preRequisite?.title
  );

  const { data: courseData } = useCoursesQuery({ limit: 10, page: 1 });
  const courses = courseData?.courses;
  const coursesOptions = courses?.map(
    (course: { title: string; id: string }) => {
      return {
        label: course?.title,
        value: course?.id,
      };
    }
  );

  const onSubmit = async (values: any) => {
    values.credits = parseInt(values?.credits);

    const coursePreRequisitesOptions = courseData?.courses
      ?.flatMap((data: any) => {
        if (id === data?.id) {
          const preCourse = data?.preRequisite?.map((c: any) =>
            course.map((title: string) => {
              if (title === c.preRequisite?.title) {
                return {
                  courseId: c.preRequisite?.id,
                };
              }
            })
          );
          return preCourse;
        }
      })
      .filter((item) => item)
      .flat(); // Flatten the result array

    console.log(coursePreRequisitesOptions);

    values.preRequisiteCourses = coursePreRequisitesOptions;
    message.loading("Updating.....");
    try {
      // await updateCourse({ id, body: values }).unwrap();
      message.success("Course updated successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    code: data?.code || "",
    credits: data?.credits || 3,
    preRequisiteCourses: course,
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
            label: "Courses",
            link: "/admin/course",
          },
        ]}
      />

      <ActionBar title="Update courses"></ActionBar>
      <Forms submitHandler={onSubmit} defaultValues={defaultValues}>
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
          Update
        </Button>
      </Forms>
    </div>
  );
};

export default EditCourse;
