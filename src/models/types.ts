import { UseFormRegister, RegisterOptions, Control } from "react-hook-form";

export type FieldType = "text" | 'number' | 'select' | 'radio';

interface BaseUIConfig {
  label: string;
}

export interface TextUIConfig extends BaseUIConfig {
  type: "text" | "number";
  placeholder: string;
}

export interface SelectUIConfig extends BaseUIConfig {
  type: "select";
  placeholder: string;
  dataSource: string;
  options: string[];
}

export interface RadioUIConfig extends BaseUIConfig {
  type: "radio";
  options?: string[];
}

export type UIConfig = TextUIConfig | SelectUIConfig | RadioUIConfig;

interface BaseValidation {
  required_error: string;
}

export interface StringValidation extends BaseValidation {
  type: "string";
  min: number;
  min_error: string;
}

export interface NumberValidation extends BaseValidation {
  type: "number";
  min: number;
  max?: number;
  min_error: string;
  max_error?: string;
}

export interface EnumValidation extends BaseValidation {
  type: "enum";
  values: string[];
}

export type ValidationConfig = StringValidation | NumberValidation | EnumValidation;

export interface FieldConfig {
  name: string;
  ui: UIConfig;
  validation: ValidationConfig;
}

export interface CrossFieldValidationConfig {
  type: "crossField";
  fields: string[];
  helper: string;
  args: any[];
  message: string;
}

export interface FormConfig {
  formName: string;
  formTitle: string;
  fields: FieldConfig[];
  crossFieldValidations: CrossFieldValidationConfig[];
}

interface BaseFieldProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  rules: RegisterOptions;
  error: string;
}

export interface TextFieldProps extends BaseFieldProps {
  type: "text" | "number";
  placeholder: string;
}

export interface SelectFieldProps extends BaseFieldProps {
  options: any[];
  control: Control<any>
}

export interface RadioFieldProps extends BaseFieldProps {
  options: string[];
  control: Control<any>
}

export interface SchemaConfig {
  schema: FormConfig;
}