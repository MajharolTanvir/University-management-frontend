"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfoForm from "@/components/StudentInfo/StudentBasicInfoForm";
import StudentInfoForm from "@/components/StudentInfo/StudentForm";
import StudentGuardianInfoForm from "@/components/StudentInfo/StudentGuardianInfoForm";
import StudentLocalGuardianInfoForm from "@/components/StudentInfo/StudentLocalGuardianInfoForm";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddStudentWithFormDataMutation } from "@/redux/Api/studentApi";

import { message } from "antd";

const CreateStudentPage = () => {
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfoForm />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfoForm />,
    },
    {
      title: "Guardian Information",
      content: <StudentGuardianInfoForm />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentLocalGuardianInfoForm />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1 style={{ margin: "10px 0px" }}>Create Student</h1>
      <StepperForm
        persistKey="student-create-form"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
