import { useAcademicFacultiesQuery } from "@/redux/Api/Academic/facultyApi";
import FormSelectFields, { ISelectFieldOptions } from "./FormSelectFields";

type ACFacultyFieldProps = {
  name: string;
  label: string;
  size?: "large" | "small";
  value?: string
};

const ACFacultyField = ({ name, label, size, value }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  const acFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });

  return (
    <FormSelectFields
      name={name}
      label={label}
      size={size}
      value={value}
      options={acFacultyOptions as ISelectFieldOptions[]}
    />
  );
};

export default ACFacultyField;
