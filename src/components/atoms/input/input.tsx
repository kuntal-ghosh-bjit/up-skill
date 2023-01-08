import React from "react";
import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";
import { TextField, TextFieldProps } from "@mui/material";

type inheritedProps = Pick<
  TextFieldProps,
  | "required"
  | "fullWidth"
  | "label"
  | "autoComplete"
  | "variant"
  | "name"
  | "onChange"
  | "onClick"
  | "defaultValue"
  | "value"
>;
export type InputProps = BaseComponentProps & inheritedProps;

export const Input = ({
  className,
  required,
  id,
  name,
  label,
  fullWidth,
  autoComplete,
  variant,
  defaultValue,
  value,
  onChange,
}: InputProps) => {
  const componentClassName = "a-input";
  const { Container } = createComponentBase(componentClassName, "div");
  return (
    <Container className={className}>
      <TextField
        required={required}
        id={id}
        name={name}
        label={label}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        variant={variant}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Container>
  );
};
