"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfoForm from "@/components/StudentInfo/StudentBasicInfoForm";
import StudentGuardianInfoForm from "@/components/StudentInfo/StudentGuardianInfoForm";
import StudentInfoForm from "@/components/StudentInfo/StudentForm";
import StudentLocalGuardianInfoForm from "@/components/StudentInfo/StudentLocalGuardianInfoForm";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentSchema } from "@/schemas/studentSchema";

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
    title: "Local guardian Information",
    content: <StudentLocalGuardianInfoForm />,
  },
];

const handleStudentSubmit = async (data: any) => {
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const CreateStudent = () => {
  return (
    <div>
      <h1>Create student</h1>
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
        resolver={yupResolver(studentSchema)}
      />
    </div>
  );
};

export default CreateStudent;
