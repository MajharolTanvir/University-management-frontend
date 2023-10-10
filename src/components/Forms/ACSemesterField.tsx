import { useAcademicSemestersQuery } from "@/redux/Api/Academic/semesterApi";
import FormSelectFields, { ISelectFieldOptions } from "./FormSelectFields";


type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACSemesterField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicSemestersQuery({
    limit: 100,
    page: 1,
  });
  const academicSemesters = data?.academicSemesters;
  const acSemesterOptions = academicSemesters?.map((acSemester) => {
    return {
      label: acSemester?.title + "-" + acSemester?.year,
      value: acSemester?.id,
    };
  });

  return (
    <FormSelectFields
      name={name}
      label={label}
      options={acSemesterOptions as ISelectFieldOptions[]}
    />
  );
};

export default ACSemesterField;
