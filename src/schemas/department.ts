import * as yup from "yup";

export const departmentSchema = yup.object().shape({
  title: yup.string().required("Department title is required")
});
