"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export interface ISelectFieldOptions {
  label: string;
  value: string;
}

interface ISelectField {
  options: ISelectFieldOptions[];
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  defaultValue?: ISelectFieldOptions;
}

const FormSelectFields = ({
  name,
  size,
  value,
  placeholder,
  options,
  label,
  defaultValue,
}: ISelectField) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? (
        <span
          style={{
            fontSize: "1rem",
            fontFamily: "cursive",
          }}
        >
          {label}
        </span>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            value={value}
            size={size}
            options={options}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
            defaultValue={defaultValue}
          ></Select>
        )}
      />
    </>
  );
};

export default FormSelectFields;
