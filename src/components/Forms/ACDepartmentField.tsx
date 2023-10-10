import { useAcademicDepartmentsQuery } from "@/redux/Api/Academic/departmentApi";
import FormSelectFields, { ISelectFieldOptions } from "./FormSelectFields";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
  size?: "large" | "small";
};

const ACDepartmentField = ({
  name,
  label,
  size,
}: ACDepartmentFieldProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  const academicDepartments = data?.academicDepartments;
  const acDepartmentOptions = academicDepartments?.map(
    (acDepartment: { title: string; id: any }) => {
      return {
        label: acDepartment?.title,
        value: acDepartment?.id,
      };
    }
  );

  return (
    <FormSelectFields
      name={name}
      label={label}
      size={size}
      options={acDepartmentOptions as ISelectFieldOptions[]}
    />
  );
};

export default ACDepartmentField;
